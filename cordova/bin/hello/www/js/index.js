$(document).ready(function (e) {
    let add_button = $('#add_multiple');
    let wrapper = $('.main_container');
    n = 0;
    let arr = [];
    $('#submit_login').on('click', function () {
        $('#content_front').hide();
        $('#content2').hide();
        $('#content1').show();
        $('#navigation_main').show();
    });

    $('#submit_logout').on('click', function () {
        $('#content_front').show();
        $('#content2').hide();
        $('#content1').hide();
        $('#navigation_main').hide();
    });

    $('#menu1').on('click', function () {
        $('#content2').hide();
        $('#content1').show();
    });
    $('#menu2').on('click', function () {
        $('#content1').hide();
        $('#content2').show();
    });


    add_button.on('click', function () {
        n++;
        wrapper.append('<hr id="ruler_' + n + '"/>\
          <div class="main_wrapper" id="wrapper_'+ n + '"> \
          <div class= "row" >\
          <div class="col-sm"> <label for="label_enduser_'+ n + '">End User/ Third Party</label> \
                  <select class="form-control" id="label_enduser_'+ n + '"> <option>1</option> <option>2</option> \
                  </select>\
              </div> \
            </div > \
          <div class="row"> \
              <div class="col-sm"> \
                  <label for="label_inspector_'+ n + '">Inspector</label> \
                  <select class="form-control" id="label_inspector_'+ n + '"> \
                      <option>1</option> <option>2</option>\
                  </select> \
              </div >\
          </div > \
          <div class="row"> \
              <div class="col-sm" > \
                  <label for="label_prodcat_'+ n + '">Product Category</label> \
                      <input type="text" class="form-control" id="label_prodcat_'+ n + '" placeholder="" value="" >\
              </div> \
          </div >\
          <div class="row"> \
              <div class="col-sm">\
                  <label for="label_schedule_'+ n + '">Schedule Date</label> <input type="date" class="form-control" id="label_schedule_' + n + '" placeholder="mm/dd/yyyy" value="" >\
              </div>\
          </div> \
          <div class="row"> \
              <div class="col-sm">\
                   <label for="label_inspectdate_'+ n + '">Inspection Date</label> \
                      <input type="date" class="form-control" id="label_inspectdate_'+ n + '" placeholder="mm/dd/yyyy" value="" >\
              </div> \
          </div>\
          <div class="row"> \
              <div class="col-sm">\
                  <label for="label_rep_'+ n + '">Rep No.</label> <input type="text" class="form-control" id="label_rep_' + n + '" placeholder="" value="" > \
              </div> \
          </div> \
          <div class="row">\
              <div class="col-sm">\
                  <label for="label_status_'+ n + '">Status</label>\
                      <input type="text" class="form-control" id="label_status_'+ n + '" placeholder="" value="" >\
              </div>\
          </div> \
          <div class="row"> \
              <div class="col-sm"> \
                  <label for="label_invoicenum_'+ n + '">Invoice Number</label>\
                       <input type="text" class="form-control" id="label_invoicenum_'+ n + '" placeholder="" value="" >\
              </div> \
          </div>\
          <div class="row">\
              <div class="col-sm"> \
                  <div class="form-group">\
                      <label for="label_remark_'+ n + '">Remark</label> \
                      <textarea class="form-control" id="label_remark_'+ n + '" rows="3">\
                      </textarea>\
                  </div>\
               </div>\
          </div>\
          <div class="row">\
              <div class="col-sm"> \
                  <div class="form-group">\
                      <button type="button" id="remove_instep_'+ n + '" onclick="removeForms(' + n + ')" class="btn btn-outline-danger btn-block">Hapus Request</button>\
                  </div>\
              </div>\
          </div>\
      </div> ');
    });

    $('#get_all_data').on('click', function () {
        let i = 0;
        for (i; i < $('.main_wrapper').length; i++) {
            val_b = $('#label_inspector_' + i + '').val();
            val_a = $('#label_enduser_' + i + '').val();
            val_c = $('#label_prodcat_' + i + '').val();
            val_d = $('#label_schedule_' + i + '').val();
            val_e = $('#label_inspectdate_' + i + '').val();
            val_f = $('#label_rep_' + i + '').val();
            val_g = $('#label_status_' + i + '').val();
            val_h = $('#label_invoicenum_' + i + '').val();
            val_i = $('#label_remark_' + i + '').val();
            let obj = {
                'label_enduser_': val_a,
                'label_inspector': val_b,
                'label_prodcat_': val_c,
                'label_schedule_': val_d,
                'label_inspectdate_': val_e,
                'label_rep_': val_f,
                'label_status_': val_g,
                'label_invoicenum_': val_h,
                'label_remark_': val_i,
            }
            arr.push(obj);
        }
        console.log(arr);
    });

    // fetch data inspection list
    $.ajax({
        url: "js/list.json", // change with service
        method: 'get',
        async: false,
        success: function (result) {
            console.log(result);
            let elem = $('.wrapper_list_inner');
            let i = 0;
            for (i; i < result.length; i++) {
                list = '<a href="#" id="" class="list-group-item list-group-item-action flex-column align-items-start">\
                                <div class="d-flex w-100 justify-content-between">\
                                    <h5 class="mb-2 h5">List group item heading</h5>\
                                    <small>3 days ago</small>\
                                </div >\
                                <p class="mb-2">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget\
                                    risus varius\
                                blandit.</p>\
                                <small>Donec id elit non mi porta.</small>\
                            </a >';
                elem.append(list)
            }
        },
        failed: function (result) {
            console.log(result);
        }
    });

});

function removeForms(n) {
    $('#wrapper_' + n + '').remove();
    $('#ruler_' + n + '').remove();
    n = n - 1;
}