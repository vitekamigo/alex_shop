$(document).ready(function() {
	toastr.success("All right!");
});

// $(‘#prise__table’).DataTable({
//        ajax: {
//            url: ‘/data.json’,
//            dataSrc: ‘’
//        },
//        columns: [
//            { data: ‘Brand’ },
//            { data: ‘Product name’ },
//            { data: ‘ID products’ },
//            { data: ‘Prise’ }
//        ]
//    });

	$(document).ready(function() {
    $('#prise__table').DataTable( {
        "ajax": {
            "url": "/data.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "Brand" },
            { "data": "Product name" },
            { "data": "ID products" },
            { "data": "Prise" }
        ]
    } );
} );