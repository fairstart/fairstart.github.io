/*
 * Fair Start Co-Founder Canvas - Main Application
 * Professional JavaScript architecture for technical credibility
 * Version: 1.0 (Extracted from monolithic structure)
 */

// ================================
// APPLICATION INITIALIZATION
// ================================

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMEairmPy1JsJb1HcIEPEulgP1lH7ckXk",
    authDomain: "fair-start-mvp.firebaseapp.com",
    projectId: "fair-start-mvp",
    storageBucket: "fair-start-mvp.firebasestorage.app",
    messagingSenderId: "355035085417",
    appId: "1:355035085417:web:11971bbcd14555e0b5c0f8",
    measurementId: "G-0Q609DNKZL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase initialized successfully!");

// ================================
// GLOBAL STATE MANAGEMENT
// ================================

// Authentication state
let currentUser = null;
let authModalInstance = null;

// Global variables for invitation handling
let pendingInviteCode = null;
let pendingTeamId = null;

// ================================
// APPLICATION INITIALIZATION
// ================================

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fair Start application initializing...');
    
    // Initialize Bootstrap modal
    authModalInstance = new bootstrap.Modal(document.getElementById('authModal'));
    
    // Setup authentication listeners
    setupAuthListeners();
    
    // Check for invitation in URL
    checkForInvitation();
    
    // Check authentication state
    auth.onAuthStateChanged(function(user) {
        currentUser = user;
        
        if (user) {
            // Load user's existing assessment data
            loadUserAssessment(user);
        }
        
        updateUI(user);
    });
});

// ================================
// UI MANAGEMENT FUNCTIONS
// ================================

// Update UI based on authentication state
function updateUI(user) {
    console.log('updateUI called with user:', user ? user.email : 'null');
    
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const loggedOutCTAs = document.getElementById('loggedOutCTAs');
    const loggedInCTAs = document.getElementById('loggedInCTAs');

    if (user) {
        // User is logged in
        authButtons.style.display = 'none';
        userMenu.style.display = 'flex';
        userMenu.style.setProperty('display', 'flex', 'important');
        
        // Update profile information
        updateProfileInfo(user);
        
        // Update homepage CTAs for logged in state
        if (loggedOutCTAs && loggedInCTAs) {
            loggedOutCTAs.style.display = 'none';
            loggedInCTAs.style.display = 'block';
        }
        
        // Update bottom CTA button
        const bottomCTA = document.getElementById('bottomCTA');
        if (bottomCTA) {
            bottomCTA.textContent = 'Go to Dashboard';
            bottomCTA.onclick = showDashboard;
        }
        
        // If user has pending invitation, show dashboard with team notification
        if (pendingTeamId || pendingInviteCode) {
            showDashboard();
        }
    } else {
        // User is logged out
        console.log('Setting logged out state');
        authButtons.style.display = 'flex';
        userMenu.style.display = 'none';
        userMenu.style.setProperty('display', 'none', 'important');
        
        // Update homepage CTAs for logged out state
        if (loggedOutCTAs && loggedInCTAs) {
            loggedOutCTAs.style.display = 'block';
            loggedInCTAs.style.display = 'none';
        }
        
        // Reset bottom CTA button
        const bottomCTA = document.getElementById('bottomCTA');
        if (bottomCTA) {
            bottomCTA.textContent = 'Get Beta Access';
            bottomCTA.onclick = function() { showAuthModal('signup'); };
        }
        
        showLandingPage();
    }
}

// ================================
// NAVIGATION FUNCTIONS
// ================================

// Hide all views for clean navigation
function hideAllViews() {
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.features-section').style.display = 'none'; 
    document.querySelector('.social-proof').style.display = 'none';
    document.querySelector('.cta-section').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('assessment').style.display = 'none';
    document.getElementById('alignmentViz').style.display = 'none';
    document.getElementById('invitationPage').style.display = 'none';
    document.getElementById('welcomeToTeamPage').style.display = 'none';
    document.getElementById('assessmentReview').style.display = 'none';
    
    // Close profile dropdown when navigating
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
        document.removeEventListener('click', closeProfileDropdownOnOutsideClick);
    }
}

// Show Fair Start home page
function showFairStartHome() {
    hideAllViews();
    document.querySelector('nav').style.display = 'block';
    document.querySelector('.hero-section').style.display = 'block';
    document.querySelector('.features-section').style.display = 'block';
    document.querySelector('.social-proof').style.display = 'block';
    document.querySelector('.cta-section').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
}

// Show landing page (alias for home)
function showLandingPage() {
    showFairStartHome();
}

// Show dashboard
function showDashboard() {
    document.querySelector('nav').style.display = 'block';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.features-section').style.display = 'none';
    document.querySelector('.social-proof').style.display = 'none';
    document.querySelector('.cta-section').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    
    // Check if user has completed assessment and show appropriate team options
    checkUserAssessmentStatus();
}

// ================================
// PLACEHOLDER FUNCTIONS
// ================================
// These will be moved to specific modules

// Assessment functions (will be moved to assessment.js)
function startAssessment() {
    console.log('Assessment function - to be implemented in assessment.js');
}

// Authentication functions (will be moved to auth.js)
function showAuthModal(mode) {
    console.log('Auth function - to be implemented in auth.js');
}

function setupAuthListeners() {
    console.log('Auth listeners - to be implemented in auth.js');
}

// Team functions (will be moved to teams.js)
function checkForInvitation() {
    console.log('Team function - to be implemented in teams.js');
}

function loadUserAssessment(user) {
    console.log('Assessment function - to be implemented in assessment.js');
}

function updateProfileInfo(user) {
    console.log('Profile function - to be implemented in auth.js');
}

function checkUserAssessmentStatus() {
    console.log('Assessment function - to be implemented in assessment.js');
}

function closeProfileDropdownOnOutsideClick(event) {
    console.log('Profile function - to be implemented in auth.js');
}