$(document).ready(function() {
	$('#tabletag').DataTable( {
	        "ajax": {
	            "url": "http://localhost:3006/data",
	            "dataSrc": ""
	        },
	        "columns": [
	            { "data": "id" },
	            { "data": "first_name" },
	            { "data": "last_name" },
              { "data": "gender" },
	            { "data": "state" }
	        ]
	    } );
			// $('#myTable').on('click', 'a.editor_remove', function (e) {
			//         e.preventDefault();
			//
			//         editor.remove( $(this).closest('tr'), {
			//             title: 'Delete record',
			//             message: 'Are you sure you wish to remove this record?',
			//             buttons: 'Delete'
			//         } );
			//     } );
});
