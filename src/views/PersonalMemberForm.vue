<template>
    <div class="memberForm">
        <div class="header ">
            <div class="img ">
                <img src="@/assets/images/logo.gif" alt="">
            </div>
            <div>
                <h1>MYANMAR HOTELIER ASSOCIATION</h1>
                <p>(APPLICATION FORM FOR PERSOANL MEMBERSHIP)</p>

            </div>
        </div>
        <form v-if="!isLoading" @submit.prevent = register >
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Owner Name</label>
                        <input type="text" name="owner" class="form-control " v-model="formData.owner" placeholder="Enter your name">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">N.R.C No</label>
                        <input type="text" name="nrc_no" class="form-control " v-model="formData.nrc_no" placeholder="Enter your NRC number">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Contact Phone</label>
                        <input type="text" name="owner_phone" class="form-control " v-model="formData.owner_phone" placeholder="Enter your phone number">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Address</label>
                        <textarea v-model="formData.address" placeholder="Enter your address" name="address" class="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                </div>
            </div>

            <div class="row ">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Hotel Name</label>
                        <input type="text" name="hotel_name" class="form-control " v-model="formData.hotel_name" placeholder="Enter hotel's name">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">No. of Rooms</label>
                        <input type="number" name="no_of_room" class="form-control " v-model="formData.no_of_room" placeholder="Enter total rooms">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">No. of Employee</label>
                        <input type="number" name="no_of_employee" class="form-control " v-model="formData.no_of_employee" placeholder="Enter total employee">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Zone</label>
                        <input type="text" name="zone" class="form-control " v-model="formData.zone" placeholder="Enter hotel's zone">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Phone / Fax / Email</label>
                        <input type="text" name="hotel_contact" class="form-control " v-model="formData.hotel_phone" placeholder="Enter hotel's zone">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Hotel Address</label>
                        <textarea v-model="formData.hotel_address" placeholder="Enter hotel's address" name="hotel_address" class="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                </div>
            </div>

            <div class="row membership">
                <div class="">
                    <input class="form-check-input me-1" type="radio" name="member_type" value="A" id="flexRadioDefault1" v-model="formData.member_type" checked>
                    <label class="form-check-label " for="flexRadioDefault1">
                        Application
                    </label>

                    <input class="form-check-input r-input mx-4" type="radio" name="member_type" value="R" id="flexRadioDefault2" v-model="formData.member_type" >
                    <label class="form-check-label " for="flexRadioDefault2">
                        Apply to Membership
                    </label>
                </div>
            </div>

        <div class="information">
            <h6>Membership (p)</h6>
            <p>Annual Fees cost 25000 Kyats for a year and are collected 3 years at a time</p>

        </div>

        <div class="form_button row">
            <div class="col-lg-6 col-md-6 col-6">
                <div type="submit" @click="register" class="button text-center pointer">Register</div>
            </div>
            <div class="col-lg-6 col-md-6 col-6">
                <router-link to="/"><div class="button text-center pointer">Cancel</div></router-link>
            </div>
        </div>
    </form>
</div>
    <div v-if="isLoading"><Loading></Loading></div>
</template>

<script>
import api from '@/api/api';
import Loading from '../components/Loading'
import { ref } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2'

    export default {
  components: { Loading },
        setup() {
            let isLoading = ref(false);

            let formData = ref({
                owner: '',
                nrc_no: '',
                owner_phone: '',
                address: '',
                hotel_name: '',
                no_of_room: '',
                no_of_employee: '',
                zone: '',
                hotel_phone: '',
                hotel_address: '',
                member_type: 'A',
            });

            let register = async() => {
                isLoading.value = true;
                try{
                    //create a new formdata instance
                    let formDataToSend = new FormData();


                    //append other form fields to formDataToSend
                    formDataToSend.append('owner', formData.value.owner);
                    formDataToSend.append('nrc_no', formData.value.nrc_no);
                    formDataToSend.append('owner_phone', formData.value.owner_phone);
                    formDataToSend.append('address', formData.value.address);
                    formDataToSend.append('hotel_name', formData.value.hotel_name);
                    formDataToSend.append('no_of_room', formData.value.no_of_room);
                    formDataToSend.append('no_of_employee', formData.value.no_of_employee);
                    formDataToSend.append('zone', formData.value.zone);
                    formDataToSend.append('hotel_phone', formData.value.hotel_phone);
                    formDataToSend.append('hotel_address', formData.value.hotel_address);
                    formDataToSend.append('member_type', formData.value.member_type);

                    let response = await axios.post(api.sendHotelMemberForm, formDataToSend);

                    if(response.status === 200) {
                        isLoading.value = false;
                        Swal.fire({
                            icon: 'success',
                            title: 'Your form is submitted successfully',
                            text: "Myanmar Hotelier Association's KBZ Bank A/c -02730402703098001 and A/c name is Myanmar Hotelier Association.",
                        }).then((result) => {
                            if(result.isConfirmed) {
                                window.location.href = '/';
                            }
                        })
                    }

                }
                catch(err) {
                    console.log(err);
                }
            }


            return {formData, register, isLoading}
        }
    }
</script>

<style scoped>
    .memberForm {
        margin: 90px 20% 80px;
        padding: 50px 50px;
        background: linear-gradient(165deg, #176799, #1496c5);
        border-radius: 10px;
    }
    .memberForm .header .img {
        width:80px;
        height: 80px;
        margin-bottom: 10px;
    }

    .memberForm .header img {
        width: 100%;
        height: 100%;
        object-fit: contain;

    }

    .memberForm .header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .header div h1 {
        color: #fff;
        font-weight: bolder;
        font-size: 25px;
    }
    .header div p {
        color: #fff;
        font-weight: bold;
        font-size: 17px;
    }

    form {
        margin-top: 40px;
    }

    form label {
        color: #f1d780;
        font-size: 16px;
        font-weight: bold;
    }

    form .form-group input, form .form-group textarea {
        color: #302d2d !important; 
        font-size: 18px;
        margin-bottom: 20px;
    }

    form .row {
        margin-bottom: 30px;
    }

    .membership .apply_member {
        color: #f1d780;
        font-size: 18px;
        font-weight: bold;
    }

    form hr {
        background: #f1d780;
        display: block;
        height: 3px;
        border: none;
    }

    .memberForm .information {
        padding-top: 25px;
    }

    .memberForm .information h6 {
        font-size: 20px;
        color: #ebebeb;
        margin-bottom: 20px;
    }

    .price table th {
        color: #f1d780;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
    }

    .price table td {
        color: #ebebeb;
        text-align: center;
    }

    .information p {
        color: #ebebeb;
    }

    .related_party {
        margin-top: 35px;
    }


    .form_button {
        margin-top: 25px !important;
    }

    .related_party ul li {
        list-style: circle;
        color: #ebebeb;
    }

    .form_button .button {
        background-image: linear-gradient(to right, rgb(192, 150, 58), rgb(187, 117, 13));
        color: #fff;
        font-weight: bold;
        padding: 7px 0;
        border-radius: 20px;
    }

    @media (max-width:1500px) {
        .memberForm {
            margin: 80px 20% 80px;
            padding: 30px 50px;
            background: linear-gradient(165deg, #176799, #1496c5);
        }
        .memberForm .header .img {
            width:80px;
            height: 80px;
            margin-bottom: 10px;
        }
    
    
        .memberForm .header {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }
    
        .header div h1 {
            font-size: 20px;
        }
        .header div p {
            font-size: 16px;
            letter-spacing: 1px;
        }

        form {
            margin-top: 20px;
        }
    
        form label {
            font-size: 12px;
        }
    
        form .form-group input, form .form-group textarea {
            font-size: 14px;
            margin-bottom: 10px;
        }
    
        form .row {
            margin-bottom: 20px;
        }
    
        .membership .apply_member {
            font-size: 14px;
        }

        .membership label {
            font-size: 12px;
        }
    
    
        .memberForm .information {
            padding-top: 18px;
        }
    
        .memberForm .information h6 {
            font-size: 16px;
            margin-bottom: 20px;
        }
    
        .price table th {
            font-size: 15px;
        }
    
        .price table td {
            text-align: center;
            font-size: 14px;
        }

        .related_party {
            margin-top: 35px;
        }
    
        .related_party ul li {
            font-size: 14px;
        }

        .form_button {
            margin-top: 25px !important;
        }
    
        .form_button .button {
            background-image: linear-gradient(to right, rgb(192, 150, 58), rgb(187, 117, 13));
            color: #fff;
            font-weight: bold;
            padding: 5px 0;
            border-radius: 20px;
        }
    }

    @media (max-width: 990px) {
        .memberForm {
            margin: 60px 20% 80px;
            padding: 30px 50px;
            background: linear-gradient(165deg, #176799, #1496c5);
        }
        .memberForm .header .img {
            width:50px;
            height: 50px;
            margin-bottom: 10px;
        }
    
    
        .memberForm .header {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }
    
        .header div h1 {
            font-size: 14px;
        }
        .header div p {
            font-size: 12px;
            letter-spacing: 0px;
        }

        form {
            margin-top: 20px;
        }
    
        form label {
            font-size: 12px;
        }
    
        form .form-group input, form .form-group textarea {
            font-size: 12px;
            margin-bottom: 10px;
        }
    
        form .row {
            margin-bottom: 15px;
        }
    
        .membership .apply_member {
            font-size: 14px;
        }

        .membership label {
            font-size: 12px;
        }
    
    
        .memberForm .information {
            padding-top: 12px;
        }
    
        .memberForm .information h6 {
            font-size: 14px;
            margin-bottom: 20px;
        }
    
        .price table th {
            font-size: 12px;
        }
    
        .price table td {
            text-align: center;
            font-size: 11px;
        }
    
        .related_party ul li {
            font-size: 12px;
        }
    
        .form_button .button {
            background-image: linear-gradient(to right, rgb(192, 150, 58), rgb(187, 117, 13));
            color: #fff;
            font-weight: bold;
            padding: 2px 0;
            font-size: 12px;
            border-radius: 20px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 490px) {
        .memberForm {
            margin: 60px 3% 80px;
            padding: 30px 20px;
            background: linear-gradient(165deg, #176799, #1496c5);
        }
        .memberForm .header .img {
            width:50px;
            height: 50px;
            margin-bottom: 10px;
        }
    
    
        .memberForm .header {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            height: auto;
        }
    
        .header div h1 {
            font-size: 14px;
        }
        .header div p {
            font-size: 12px;
            letter-spacing: 1px;
        }

        form {
            margin-top: 20px;
            padding: 10px 25px;
        }
    
        
    
        .membership .apply_member {
            font-size: 12px;
        }

        .membership label {
            font-size: 11px;
        }

        .membership span {
            margin-right: 10px !important;
        }

        .membership .r-input {
            margin-right: 5px !important;
        }
    
    
        .memberForm .information {
            padding-top: 5px;
        }
    
        .memberForm .information h6 {
            font-size: 12px;
            margin-bottom: 20px;
        }
    
        .price table th {
            font-size: 12px;
        }
    
        .price table td {
            text-align: center;
            font-size: 11px;
        }

        .related_party {
            margin-top: 35px;
        }
    
        .related_party ul li {
            font-size: 12px;
        }

        .form_button {
            margin-top: 25px !important;
        }
    
        .form_button .button {
            background-image: linear-gradient(to right, rgb(192, 150, 58), rgb(187, 117, 13));
            color: #fff;
            font-weight: bold;
            padding: 5px 0;
            border-radius: 20px;
        }
    }

    @media (max-width:390px) {
     
        .header div h1 {
            font-size: 12px;
        }
        .header div p {
            font-size: 11px;
            letter-spacing: 0px;
        }
    }
</style>
