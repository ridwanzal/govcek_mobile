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
    $('.goto_createuser').on('click', function(){
        $('#content_front').hide(); 
        $('#content_front_register').show();
    });

    $('.goto_login').on('click', function(){
        $('#content_front').show(); 
        $('#content_front_register').hide();
    })
    
    $('#menu1').on('click', function () {
        $('#content2').hide();
        $('#content1').show();
        $('#content3').hide();
        $('#search_list').show();
    });
    $('#menu2').on('click', function () {
        $('#content1').hide();
        $('#content2').show();
        $('#content3').hide();
        $('#search_list').hide();
    });
    $('#menu3').on('click', function(){
        $('#content1').hide();
        $('#content2').hide();
        $('#content3').show();
        $('#search_list').hide();
    });

    elem_main_nav.hide();
    
    let check_session = localStorage.getItem('userdata');
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

    let add_button = $('#add_multiple');
    let wrapper = $('.main_container');
    let arr = [];
    let email_checked = false;
    let password_checked = false;
    n = 0;
    $('#submit_login').on('click', function () {    
        if(elem_login_email.val() == ""){
            elem_login_email.css('border-color', '#ff0000');
            return;
        }else if(validateEmail(elem_login_email.val()) == false){
            elem_login_email.css('border-color', '#ff0000');
            Swal.fire({
                type: 'error',
                title: 'Error   ',   
                text: 'Check your email input',
            });
            return;
        }else{
            elem_login_email.css('border-color', '#ced4da');
            email_checked = true;
        }
        
        if(elem_login_pass.val() == ""){
            elem_login_pass.css('border-color', '#ff0000');
            return;
        }else{
            elem_login_pass.css('border-color', '#ced4da');
            password_checked = true;
        }

        // call service here if succcess return json
        if(email_checked && password_checked){
            let i = 0 ;
                if(response_login.code === 200){
                    elem_main_nav.show();
                    Swal.fire({
                        type: 'success',
                        title: 'Success',   
                        text: 'Login Success',
                    });
                    localStorage.setItem("userdata", response_login.data);
                    setTimeout(function(){
                          $('#content_front').hide(); 
                          $('#content2').hide();
                          $('#content1').show();
                          $('#navigation_main').show();
                          login_status = 1;
                    }, 100)
            }
        }
    });
    
    
    $('#submit_logout').on('click', function () {
        Swal.fire({
            title: 'Logout',
            text: "Anda yakin untuk keluar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Logout!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Logout success'
              )
                $('#content_front').show();
                $('#content2').hide();
                $('#content1').hide();
                $('#content3').hide();
                $('#navigation_main').hide();
                localStorage.removeItem("userdata");
                elem_login_email.val('');
                elem_login_pass.val('')
                elem_main_nav.hide();
            }
          })
    });



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
                        list = '<a href="#" id="" class="list-group-item list-group-item-action flex-column align-items-start">\
                                        <div class="d-flex w-100 justify-content-between ">\
                                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">'+result.data[i].company+'</h5>\
                                            <small>'+result.data[i].schedule_date+'</small>\
                                        </div >\
                                        <p class="mb-2 thisfontblack">'+result.data[i].product_category+'</p>\
                                        <div class="d-flex w-100 justify-content-between ">\
                                        <small>'+result.data[i].remark+'</small>\
                                        <small class="align-right">'+result.data[i].inspector_name+'</small>\
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