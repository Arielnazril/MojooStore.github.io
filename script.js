function showContent(category, event) {
    // Menghentikan perilaku default dari tautan
    if (event) {
        event.preventDefault();
    }

    // Sembunyikan semua elemen dengan class "product-content"
    var productContents = document.querySelectorAll('.product-content');
    productContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Tampilkan elemen dengan ID sesuai dengan kategori yang dipilih
    var selectedContent = document.getElementById(category + 'Content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
