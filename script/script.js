// دالة تسجيل الدخول
function login() {
    // هنا يمكنك إضافة منطق التحقق (سنكتفي بالتنبيه حالياً)
    alert("تم تسجيل الدخول بنجاح");
    window.location.href = "index.html"; // الانتقال للصفحة الرئيسية
}

// دالة تسجيل الخروج
function logout() {
    alert("تم تسجيل الخروج");
    window.location.href = "login.html"; // العودة لصفحة الدخول
}

// دالة إنشاء حساب
function registerUser() {
    alert("تم إنشاء الحساب بنجاح");
    window.location.href = "login.html"; // التوجه لتسجيل الدخول
}

// دالة رفع محاضرة
function uploadLecture() {
    alert("سيتم ربط رفع الملفات بـ PHP لاحقاً");
    // يمكن إعادة التوجيه أو البقاء في نفس الصفحة
}

// (اختياري) دالة للتنقل السريع إذا احتجت
function goTo(page) {
    window.location.href = page + ".html";
}
