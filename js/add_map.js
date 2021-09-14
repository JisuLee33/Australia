//sub- .slide image click => map change

$(function(){
  $(".container_1").click(function(){
    $("#queen iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15303.213547118297!2d145.4599703760534!3d-16.48549034143784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6982a7dffaf7d915%3A0x55eef0c855531846!2sFour%20Mile%20Beach%2C%20Port%20Douglas!5e0!3m2!1sen!2sus!4v1623229422251!5m2!1sen!2sus");
    $(".slider p").removeClass("skyblue");
    $(this).find('p').addClass("skyblue");
  });
 
  $(".container_2").click(function(){
    $("#queen iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14158.645731334727!2d153.0136086902853!3d-27.47979788944176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0c3a9a0799%3A0xabd7ca3589cf6825!2sSouth%20Bank%2C%20South%20Brisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sus!4v1623204064306!5m2!1sen!2sus");
    $(".slider p").removeClass("skyblue");
    $(this).find('p').addClass("skyblue");
    
  });

  $(".container_3").click(function(){
    $("#queen iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14151.70093913509!2d152.968815!3d-27.5337818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd95a4342ea4d7936!2sLone%20Pine%20Koala%20Sanctuary!5e0!3m2!1sen!2sus!4v1623227503950!5m2!1sen!2sus");
    $(".slider p").removeClass("skyblue");
    $(this).find('p').addClass("skyblue");
  
  });

  $(".container_4").click(function(){
    $("#queen iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.85423185885!2d153.3103839509931!3d-27.90644624201469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91112453d432df%3A0x23a7f4cf1194d1fc!2sMovie%20World!5e0!3m2!1sen!2sus!4v1623227661041!5m2!1sen!2sus");
    $(".slider p").removeClass("skyblue");
    $(this).find('p').addClass("skyblue");
  });

  $(".container_5").click(function(){
    $("#queen iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.1975048882464!2d153.42332205099427!3d-27.957236944221403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910fbcb65bf0db%3A0xfac5c569854751a0!2sSea%20World!5e0!3m2!1sen!2sus!4v1623229637690!5m2!1sen!2sus");
    $(".slider p").removeClass("skyblue");
    $(this).find('p').addClass("skyblue");
  });

  $(".container_6").click(function(){
    $("#queen iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61102.40962974728!2d145.56982802174497!3d-16.83128646417166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69787a6d6b4ef5ef%3A0x500eef17f2107b0!2sKuranda%20QLD%204881%2C%20Australia!5e0!3m2!1sen!2sus!4v1623227599420!5m2!1sen!2sus");
    $(".slider p").removeClass("skyblue");
    $(this).find('p').addClass("skyblue");
  });
});