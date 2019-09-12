let login_status = 0;
let elem_login_email = $('#inputEmail');
let elem_login_pass = $('#inputPassword');
let elem_main_nav = $('#main_nav');
let response_login =
{
    data : [{
        username : 'ridwanzal',
    }],
    message : 'Success',
    code : 200
};

$(document).ready(function (e) {
    mainmenu.loadmenu();
    elem_main_nav.hide();
    let check_session = JSON.parse(localStorage.getItem('userdata'));
    if(check_session != null){
        $('#content_front').hide(); 
        $('#content2').hide();
        $('#content1').show();
        $('#content_front_register').hide();
        $('#navigation_main').show();
        elem_main_nav.show();
    }else{
        $('#content_front').show(); 
        $('#content_front_register').hide();
        $('#content2').hide();
        $('#content1').hide(); 
        $('#navigation_main').hide();
        elem_main_nav.hide();
    }

    session.login();
    session.logout();

    add_button.on('click', function () {
        n++;
        wrapper.append('<hr id="ruler_' + n + '"/>\
          <div class="main_wrapper" id="wrapper_'+ n + '"> \
          <div class= "row" >\
          <div class="col-sm"> <label for="label_enduser_'+ n + '" class="thisfontblack">End User/ Third Party</label> \
                  <select class="form-control" id="label_enduser_'+ n + '"> <option>1</option> <option>2</option> \
                  </select>\
              </div> \
            </div > \
          <div class="row"> \
              <div class="col-sm"> \
                  <label for="label_inspector_'+ n + '" class="thisfontblack">Inspector</label> \
                  <select class="form-control" id="label_inspector_'+ n + '"> \
                      <option>1</option> <option>2</option>\
                  </select> \
              </div >\
          </div > \
          <div class="row"> \
              <div class="col-sm" > \
                  <label for="label_prodcat_'+ n + '" class="thisfontblack">Product Category</label> \
                      <input type="text" class="form-control" id="label_prodcat_'+ n + '" placeholder="" value="" >\
              </div> \
          </div >\
          <div class="row"> \
              <div class="col-sm">\
                  <label for="label_schedule_'+ n + '" class="thisfontblack">Schedule Date</label> <input type="date" class="form-control" id="label_schedule_' + n + '" placeholder="mm/dd/yyyy" value="" >\
              </div>\
          </div> \
          <div class="row"> \
              <div class="col-sm">\
                   <label for="label_inspectdate_'+ n + '" class="thisfontblack">Inspection Date</label> \
                      <input type="date" class="form-control" id="label_inspectdate_'+ n + '" placeholder="mm/dd/yyyy" value="" >\
              </div> \
          </div>\
          <div class="row"> \
              <div class="col-sm">\
                  <label for="label_rep_'+ n + '" class="thisfontblack">Rep No.</label> <input type="text" class="form-control" id="label_rep_' + n + '" placeholder="" value="" > \
              </div> \
          </div> \
          <div class="row">\
              <div class="col-sm">\
                  <label for="label_status_'+ n + '" class="thisfontblack">Status</label>\
                      <input type="text" class="form-control" id="label_status_'+ n + '" placeholder="" value="" >\
              </div>\
          </div> \
          <div class="row"> \
              <div class="col-sm"> \
                  <label for="label_invoicenum_'+ n + '" class="thisfontblack">Invoice Number</label>\
                       <input type="text" class="form-control" id="label_invoicenum_'+ n + '" placeholder="" value="" >\
              </div> \
          </div>\
          <div class="row">\
              <div class="col-sm"> \
                  <div class="form-group">\
                      <label for="label_remark_'+ n + '" class="thisfontblack">Remark</label> \
                      <textarea class="form-control" id="label_remark_'+ n + '" rows="3">\
                      </textarea>\
                  </div>\
               </div>\
          </div>\
          <div class="row">\
              <div class="col-sm"> \
                  <div class="form-group">\
                      <button type="button" id="remove_instep_'+ n + '" onclick="removeForms(' + n + ')" class="btn btn-outline-danger btn-block thisfontblack">Hapus Request</button>\
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

    $.ajax({
        url: "http://dev.govcek.com/index.php/master_api/request_inspection", // change with service
        method: 'get',
        dataType : 'json',
        success: function (result) {
            console.log(result);
            setTimeout(function(){
                let elem = $('.wrapper_list_one');
                let i = 0;
                for (i; i < result.data.length; i++) {
                    list = '<a href="#" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                                    <div class="d-flex w-100 justify-content-between ">\
                                        <h5 class="mb-2 h5 thisfontblack font-weight-bold">'+result.data[i].company+'</h5>\
                                        <small>'+result.data[i].schedule_date+'</small>\
                                    </div >\
                                    <p class="mb-2 thisfontblack">'+result.data[i].product_category+'</p>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <small>'+result.data[i].remark+'</small>\
                                    <small class="align-right">'+checkEmpty(result.data[i].inspector_name)+'</small>\
                                    </div >\
                                </a >';
                    elem.append(list)
                }
            }, 100);
        }
    });

    });

function removeForms(n) {
    $('#wrapper_' + n + '').remove();
    $('#ruler_' + n + '').remove();
    n = n - 1;
}

function toLoginPage(){
    $('#content_front').show();
    $('#content2').hide();
    $('#content1').hide();
    $('#navigation_main').hide();
}

function toRequestForm(){
    $('#content1').hide();
    $('#content2').show();
}

function toListForm(){
    $('#content2').hide();
    $('#content1').show();
}

function validateEmail(sEmail) {
    var filter =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (filter.test(sEmail)) {
    return true;
    }
    else {  
    return false;
    }
}

function checkEmpty(str){
    str = str == null || str == "" ? " - " : str;
    return str;
}