let add_button = $('#add_multiple');
let wrapper = $('.main_container');
let arr = [];
let email_checked = false;
let password_checked = false;
let session = {
    login : function(){
        n = 0;
        $('#submit_login').on('click', function () {    
            if(elem_login_email.val() == ""){
                elem_login_email.css('border-color', '#ff0000');
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
                $.ajax({
                    url: "http://dev.govcek.com/index.php/master_api/login", // change with service
                    method: 'POST',
                    data: {
                        'username' : elem_login_email.val()
                    },
                    dataType : 'json',
                    success: function (result) {
                        if(result.status == true){
                            elem_main_nav.show();
                            $('#content_front').hide(); 
                            $('#content2').hide();
                            $('#content1').show();
                            $('#navigation_main').show();
                            console.log(result);
                            let userdata = localStorage.setItem('userdata', JSON.stringify(result));
                        }else{
                            console.log('failed');
                            Swal.fire({
                                type: 'error',
                                text: 'Error, Login failed',
                            });
                        }
                        // setTimeout(function(){

                        // }, 100);
                    }
                });
                //     if(response_login.code === 200){
                //         elem_main_nav.show();
                //         Swal.fire({
                //             type: 'success',
                //             text: 'Success, Login Success',
                //         });
                //         localStorage.setItem("userdata", response_login.data);
                //         setTimeout(function(){
                //               $('#content_front').hide(); 
                //               $('#content2').hide();
                //               $('#content1').show();
                //               $('#navigation_main').show();
                //               login_status = 1;
                //         }, 100)
                //         $('.spin').hide();
                // }
            }
        });
    },
    logout : function(){
        $('#submit_logout').on('click', function () {
            Swal.fire({
                text: "Logout, Anda yakin untuk keluar",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Logout!'
              }).then((result) => {
                if (result.value) {
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
    }
}     