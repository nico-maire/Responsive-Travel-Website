import { t } from '../utils.js';

export function initBookingPage() {

  console.log("🚀 Initializing Booking Page (Multi-Trip Support)...");

  const STORAGE_KEY = 'currentUser';

  // --- 1. Helper Functions ---

  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      console.error("Error reading localStorage", e);
      return {};
    }
  }

  /**
   * Helper to find the booking object that is currently being edited.
   */
  function getActiveBooking(user) {
    if (!user.bookings || !user.currentDraftId) return null;
    return user.bookings.find(b => b.bookingId === user.currentDraftId);
  }

  /**
   * Saves specific key-value to the ACTIVE booking in the bookings array.
   */
  function saveField(key, value) {
    let user = getCurrentUser();

    // Find the active booking index
    if (user.bookings && user.currentDraftId) {
      const bookingIndex = user.bookings.findIndex(b => b.bookingId === user.currentDraftId);

      if (bookingIndex !== -1) {
        // Update the specific booking
        user.bookings[bookingIndex][key] = value;

        // Also update root user profile for common fields (convenience for future)
        // Only for generic fields like name, email, phone
        const commonFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'streetAddress', 'city', 'country', 'zipCode'];
        if (commonFields.includes(key)) {
          user[key] = value;
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        return;
      }
    }

    // Fallback: If no active booking (shouldn't happen if flow is correct), save to root
    user[key] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }

  // --- 2. Navigation Logic ---
  function goToStep(stepNumber) {
    $('.step-content').hide().removeClass('active');
    $('.progress-step').removeClass('active');

    $(`#step-${stepNumber}`).fadeIn(300).addClass('active');
    $(`#tab-${stepNumber}`).addClass('active');

    saveField('bookingStep', stepNumber);
    window.scrollTo(0, 0);
  }

  // --- 3. Trigger Logic (Dropdown -> Reveal Fields) ---
  // (Kept same as before, just ensured it handles DOM existence)

  function handleCompanions() {
    const $select = $('#numCompanions');
    const $container = $('#companionsContainer');

    if ($select.length === 0) return;

    function update() {
      const count = parseInt($select.val(), 10) || 0;
      if (count > 0) {
        if ($container.is(':hidden')) $container.removeClass('hidden').slideDown(300);
        for (let i = 1; i <= 5; i++) {
          const $row = $(`#row-companion-${i}`);
          if (i <= count) $row.slideDown(200);
          else $row.slideUp(200);
        }
      } else {
        $container.slideUp(300, () => $container.addClass('hidden'));
      }
    }
    $select.off('change').on('change', update);
    // We delay the initial update slightly to let data load first
  }

  function handleYesNo(selectId, containerId) {
    const $select = $(`#${selectId}`);
    const $container = $(`#${containerId}`);

    if ($select.length === 0) return;

    function update() {
      if ($select.val() === 'yes') $container.removeClass('hidden').slideDown(300);
      else $container.slideUp(300, () => $container.addClass('hidden'));
    }
    $select.off('change').on('change', update);
  }


  // --- 4. Initialization & Data Loading ---

  const user = getCurrentUser();
  const activeBooking = getActiveBooking(user);

  console.log("Current Booking Draft:", activeBooking);

  // Load Data: Priority -> Active Booking Data -> User Profile Data
  // This allows pre-filling name/email if they exist in profile, but keeps trip specifics separate.

  // List of all input IDs in your form
  const inputIds = [
    'firstName', 'lastName', 'email', 'country', 'city', 'district', 'zipCode',
    'streetAddress', 'addressDetails', 'phonePrefix', 'phoneNumber',
    'numCompanions', 'companion1', 'companion2', 'companion3', 'companion4', 'companion5',
    'hasPet', 'petType', 'petSize', 'petPolicy',
    'hasAllergies', 'allergyInfo',
    'cardNumber', 'cardHolder', 'cardExpiry', 'cardCvv', 'termsAccepted'
  ];

  inputIds.forEach(id => {
    const $el = $(`#${id}`);
    if ($el.length) {
      // 1. Try to get value from the specific booking draft
      let value = activeBooking ? activeBooking[id] : undefined;

      // 2. If not in booking, try main user profile (for personal details)
      if (value === undefined || value === null || value === "") {
        value = user[id];
      }

      // 3. Set the value in the DOM
      if (value !== undefined) {
        if ($el.is(':checkbox')) {
          $el.prop('checked', value === true || value === "true");
        } else {
          $el.val(value);
        }
      }
    }
  });

  // Initialize Triggers (Run updates now that values are set)
  handleCompanions(); // This will read the value set above and open/close rows
  $('#numCompanions').trigger('change'); // Force visual update
  handleYesNo('hasPet', 'petContainer');
  $('#hasPet').trigger('change');
  handleYesNo('hasAllergies', 'allergiesContainer');
  $('#hasAllergies').trigger('change');

  // Restore Step
  // use activeBooking.bookingStep if exists, else 1
  const currentStep = (activeBooking && activeBooking.bookingStep) ? activeBooking.bookingStep : 1;
  goToStep(currentStep);


  // --- 5. Auto-Save Logic ---
  $('#bookingForm').on('input change', 'input, select, textarea', function () {
    const $el = $(this);
    const key = $el.attr('id');
    if (key) {
      const val = $el.is(':checkbox') ? $el.is(':checked') : $el.val();
      saveField(key, val);
    }
  });

  // --- 6. Navigation Listeners ---
  $('#btn-step-1').off('click').click(() => goToStep(2));
  $('#btn-step-2').off('click').click(() => goToStep(3));
  $('#tab-1').off('click').click(() => goToStep(1));
  $('#tab-2').off('click').click(() => goToStep(2));
  $('#tab-3').off('click').click(() => goToStep(3));

  // Submit Payment
  $('#btn-submit').off('click').click(function () {
    const termsAccepted = $('#termsAccepted').is(':checked');
    if (!termsAccepted) {
      alert("Por favor, acepta los términos de compra.");
      return;
    }

    const $btn = $(this);
    const originalText = $btn.text();
    $btn.text('Procesando...').prop('disabled', true);

    // Simulate API call
    setTimeout(() => {
      alert("¡Pago realizado con éxito!");

      // Mark booking as PAID
      saveField('status', 'paid');
      saveField('purchaseDate', new Date().toISOString());

      // Clear current draft ID so next time we don't load this completed booking
      let updatedUser = getCurrentUser();
      updatedUser.currentDraftId = null;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));

      $btn.text(originalText).prop('disabled', false);

      // Redirect to Profile or Home
      window.location.href = 'profile.html';
    }, 1500);
  });
}