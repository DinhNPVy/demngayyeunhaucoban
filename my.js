calculateDays();
function progress(){
    check = LoveDay % 1000;
    document.getElementById('progress').value= check;

}
function calculateDays()
{

   let start = new Date();
   let days = +document.getElementById('days').value;
   let months = +document.getElementById('months').value
   let years = +document.getElementById('years').value

   let male = document.getElementById('male').value;
    
   let female = document.getElementById('female').value;

    let tmp = true;

    
    let start_days = start.getDate();
    let start_months = start.getMonth() + 1;
    let start_years = start.getFullYear();
    let start_day = new Date(years, months - 1, days);
 

    if(start_day.getTime() > start.getTime()){
        alert("Không tồn tại ngày" + start_days + "tháng" + start_months + "năm" + start_years);
        tmp = false;
    }
    if(tmp == true)
    {
        LoveDay = Math.round((start.getTime() - start_day.getTime()) / (24 * 60 * 60 * 1000));
        rate = LoveDay/365;
        if(LoveDay >= 1000)
        {
            document.getElementById('male_img').src = 'https://i.pinimg.com/originals/f1/06/b1/f106b1fa4d0ec61792926ffcceb0f3de.gif'
            document.getElementById('female_img').src = 'https://i.pinimg.com/originals/7d/40/ca/7d40cad2b27f471fbc8424acee1d63c8.gif'
            document.getElementById('box-result').innerHTML = 'Chúc mừng ' + male + 'có ' + LoveDay + " ngày bên" + female;
            
        }else{
            document.getElementById('box-result').innerHTML = 'Chúc mừng ' + male + 'có ' + LoveDay + " ngày bên" + female +  "<br>"+"Độ gắn kết:"+Math.round(rate*100)+"%";

        }



    }else{
        document.getElementById('box-result').src = 'Bạn đã nhập sai ngày bắt đầu hẹn hò. mời bạn nhập lại...'

    }

   

}

    

   
