<template>
    <div class="memberForm">
        <div class="header ">
            <div class="img ">
                <img src="@/assets/images/logo.gif" alt="">
            </div>
            <div>
                <h1>MYANMAR HOTELIER ASSOCIATION</h1>
                <p>(APPLICATION FORM FOR MEMBERSHIP)</p>
            </div>
        </div>
        <form action="" >
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Owner Name</label>
                        <input type="text" name="owner" class="form-control " placeholder="Enter your name">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">N.R.C No</label>
                        <input type="text" name="nrc_no" class="form-control " placeholder="Enter your NRC number">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Contact Phone</label>
                        <input type="text" name="owner_phone" class="form-control " placeholder="Enter your phone number">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Address</label>
                        <textarea placeholder="Enter your address" name="address" class="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                </div>
            </div>

            <div class="row ">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Hotel Name</label>
                        <input type="text" name="hotel_name" class="form-control " placeholder="Enter hotel's name">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">No. of Rooms</label>
                        <input type="number" name="no_of_room" class="form-control " placeholder="Enter total rooms">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">No. of Employee</label>
                        <input type="number" name="no_of_employee" class="form-control " placeholder="Enter total employee">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Zone</label>
                        <input type="text" name="zone" class="form-control " placeholder="Enter hotel's zone">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Phone / Fax / Email</label>
                        <input type="text" name="hotel_contact" class="form-control " placeholder="Enter hotel's zone">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="">Hotel Address</label>
                        <textarea placeholder="Enter hotel's address" name="hotel_address" class="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                </div>
            </div>

            <div class="row membership">
                <div class="">
                    <span class="apply_member me-5">Apply to Membership</span>
                    <input class="form-check-input me-1" type="radio" name="member_type" value="A" id="flexRadioDefault1" checked>
                    <label class="form-check-label text-white" for="flexRadioDefault1">
                        (A)
                    </label>

                    <input class="form-check-input r-input mx-4" type="radio" name="member_type" value="R" id="flexRadioDefault2" >
                    <label class="form-check-label text-white" for="flexRadioDefault2">
                        (R)
                    </label>
                </div>
            </div>
            <hr>
        </form>

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
                <div class="button text-center pointer">Register</div>
            </div>
            <div class="col-lg-6 col-md-6 col-6">
                <router-link to="/"><div class="button text-center pointer">Cancel</div></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
