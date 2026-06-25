// دالة تسجيل الدخول
function login() {
    // هنا يمكنك إضافة منطق التحقق (سنكتفي بالتنبيه حالياً)
    alert("تم تسجيل الدخول بنجاح");
    window.location.href = "home.html"; // الانتقال للصفحة الرئيسية (بعد التعديل)
}

// دالة تسجيل الخروج
function logout() {
    alert("تم تسجيل الخروج");
    window.location.href = "index.html"; // العودة لصفحة الدخول (التي أصبحت index.html)
}

// دالة إنشاء حساب
function registerUser() {
    alert("تم إنشاء الحساب بنجاح");
    window.location.href = "index.html"; // التوجه لتسجيل الدخول (index.html)
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
