<template>
    <div class="memberForm" >
        <div class="header ">
            <div class="img ">
                <img src="@/assets/images/logo.gif" alt="">
            </div>
            <div>
                <h1>MYANMAR HOTELIER ASSOCIATION</h1>
                <p>(APPLICATION FORM FOR MEMBERSHIP)</p>
            </div>
        </div>
        <form v-if="!isLoading" action="" @submit.prevent = register>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Owner Name</label>
                        <input type="text" name="owner" class="form-control " placeholder="Enter your name" v-model="formData.owner" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">N.R.C No</label>
                        <input type="text" name="nrc_no" class="form-control " placeholder="Enter your NRC number" v-model="formData.nrc_no" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Contact Phone</label>
                        <input type="text" name="owner_phone" class="form-control " placeholder="Enter your phone number" v-model="formData.owner_phone" required>
                    </div>
                </div>
                <div class="col-lg-6 image-container">
                    <div class="form-group">
                        <label for="">Owner Photo</label>
                        <input type="file" name="owner_photo" @change="handleImageSelected" accept="image/*" class="form-control " placeholder="Enter your phone number" required>
                    </div>
                    <img v-show="imageUrl" :src="imageUrl" >
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Address</label>
                        <textarea placeholder="Enter your address" name="address" class="form-control" id="" cols="30" rows="4" v-model="formData.address" required></textarea>
                    </div>
                </div>
            </div>

            <div class="row ">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Hotel Name</label>
                        <input type="text" name="hotel_name" class="form-control " placeholder="Enter hotel's name" v-model="formData.hotel_name" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">No. of Rooms</label>
                        <input type="number" name="no_of_room" class="form-control " placeholder="Enter total rooms" v-model="formData.no_of_room" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">No. of Employee</label>
                        <input type="number" name="no_of_employee" class="form-control " placeholder="Enter total employee" v-model="formData.no_of_employee" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Zone</label>
                        <input type="text" name="zone" class="form-control " placeholder="Enter hotel's zone" v-model="formData.zone" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Phone / Fax / Email</label>
                        <input type="text" name="hotel_contact" class="form-control " placeholder="Enter hotel's zone" v-model="formData.hotel_phone" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Hotel Address</label>
                        <textarea placeholder="Enter hotel's address" name="hotel_address" class="form-control" id="" cols="30" rows="4" v-model="formData.hotel_address" required></textarea>
                    </div>
                </div>
            </div>

            <div class="row membership">
                <div class="">
                    <span class="apply_member me-5">Apply to Membership</span>
                    <input class="form-check-input me-1" type="radio" name="member_type" value="A" id="flexRadioDefault1" checked v-model="formData.member_type" >
                    <label class="form-check-label text-white" for="flexRadioDefault1">
                        (A)
                    </label>

                    <input class="form-check-input r-input mx-4" type="radio" name="member_type" value="R" id="flexRadioDefault2" v-model="formData.member_type">
                    <label class="form-check-label text-white" for="flexRadioDefault2">
                        (R)
                    </label>
                </div>
            </div>
            <hr>

        <div class="information">
            <h6>"Annual Fees shall cost 2500 Kyats per room for a year and are collected 3 years at a time"</h6>

            <div class="price">
                <table class="table table-responsive table-bordered ">
                    <thead>
                        <th>Hotels</th>
                        <th>Member Fees</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Room (1 to 100)</td>
                            <td>2500 Kyats x Number of Room</td>
                            <td>(3) years (Shall Cost 450,000 Ks)</td>
                        </tr>
                        <tr>
                            <td>Room (101 to 200)</td>
                            <td>2500 Kyats x Number of Room</td>
                            <td>(3) years (Shall Cost 1,050,00 Ks)</td>
                        </tr>
                        <tr>
                            <td>Room 200 Above</td>
                            <td>2500 Kyats x Number of Room</td>
                            <td>(3) years (Shall Cost 1,500,000 Ks)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="related_party">
                <h6>Related Party</h6>
                <ul>
                    <li>Member Fee (300,000) Kt</li>
                    <li>Annual Fee (100,000) Kt</li>
                </ul>
            </div>
        </div>

        <div class="form_button row">
            <div class="col-lg-6 col-md-6 col-6">
                <button type="submit" class="button text-center pointer w-100">Register</button>
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
    import Loading from '../components/Loading'
import { computed, ref, watch } from 'vue'
    import axios from 'axios'
    import useImageUpload from '@/composables/useImageUpload'
    import api from '@/api/api'
    import Swal from 'sweetalert2'

    export default {
  components: { Loading },
        setup() {
            let isLoading = ref(false);

            //image upload to server
            let {imageFile, imageUrl, handleImageSelected} = useImageUpload();

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
                member_type: '',
            })

            let register = async() => {
                isLoading.value = true;
                try{
                    //create a new formdata instance
                    let formDataToSend = new FormData();

                    //append image file to the formData
                    formDataToSend.append('owner_image', imageFile.value)

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

            
            

            return {formData,  register, handleImageSelected, imageUrl, isLoading};
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
        font-size: 18px;
        letter-spacing: 1px;
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
        font-size: 20px;
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

    .image-container {
        position: relative;
    }

    .image-container img {
        position: absolute;
        width: 200px;
        height: 150px;
        object-fit: contain;
        right: 15px;
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

        .image-container img {
            position: relative;
            width: 200px;
            height: 150px;
            object-fit: contain;
            left: 15px;
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
