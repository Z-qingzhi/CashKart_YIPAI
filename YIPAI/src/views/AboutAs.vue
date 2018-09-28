<template>
  <div id="AboutAs">
    <div class="About_box">
        <h1 class="AboutTitle">Who is cashkart?</h1>
        <p class="About_text">Cashkart is a micro-lending company that uses financial technology to better serve its customers. Currently our services is exists 100% online. We believe that a purely online service will bring our loan product efficiently and equitably to more customers.</p>
    </div>
    <div class="About_box">
        <h1 class="AboutTitle Trust_box">Why Trust Us？</h1>
        <div class="moduleOne">

            <div class="module_Es_List">
                <div>
                    <p class="module_Es_List_Title pr"><span class="EsTitleList Speedy_Processing"></span><span>Speedy Processing</span></p>
                    <p class="module_Es_List_Content">With all our processes and decisions being automated, loan approval and crediting decisions all happen within 24 hours! With that, you can receive your cash loan exactly when you need it.</p>
                </div>
            </div>
            <div class="module_Es_List">
                <div>
                    <p class="module_Es_List_Title pr"><span class="EsTitleList Simple_Operation"></span><span>Simple Operation</span></p>
                    <p class="module_Es_List_Content">You just have to fill up our online form and shortly wait for the decision on your loan. Now you have more time to focus on important matters and worry less about money.</p>
                </div>
            </div>
            <div class="module_Es_List">
                <div>
                    <p class="module_Es_List_Title pr"><span class="EsTitleList Cost_Transparency"></span><span>Cost Transparency</span></p>
                    <p class="module_Es_List_Content">No hidden fees and charges. Know exactly how much you are paying from the first step of applicaton.</p>
                </div>
            </div>
            <div class="clr"></div>

        </div>
    </div>

    

  </div>
</template>
<script>
  
  var vum = {
    name: 'Temporary',
    created:function(){
    
    },
    data: () => ({

    }),
    methods:{
        Dosild(e){
            let $e = $(e.target)
            var rel = e.currentTarget.getAttribute("rel");

            if(rel==0){
                // var a = $e.closest('.faqBox').find('.slideBox_main').outerHeight();
                $e.closest('.faqBox').find('.slideBox').slideDown()
                $e.closest('.faqBox').find('.listLogo').addClass("listLogo2");
                e.currentTarget.setAttribute("rel",1);
            }else{
                $e.closest('.faqBox').find('.slideBox').slideUp();
                $e.closest('.faqBox').find('.listLogo').removeClass("listLogo2");
                e.currentTarget.setAttribute("rel",0);
            }
            
        }
    }
  }
  export default vum;



</script>

<style lang="scss" src="../assets/css/aboutAs.css" scoped>
	
<!-- @import '../assets/css/aboutAs.css'; -->
  
</style>
