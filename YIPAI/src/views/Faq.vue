<template>
  <transition name="fade">
  <div id="faq" v-if="show">
    <div class="faqMainBox">
        <h1 class="faqTitle">Frequently Asked Questions about cashkart</h1>
        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Who is cashkart?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>Cashkart is a micro-lending company that uses financial technology to better serve its customers. Currently our services is exists 100% online. We believe that a purely online service will bring our loan product efficiently and equitably to more customers.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>How much can I loan and for how long?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>Our currently loanable amounts for the first-time applicants range start from 2,000 to 5,000 PHP. For the repeated borrowers and they have a good standing payment can borrow up to 20,000. Use the Loan Calculator on the cashkart.ph website for your desired loan amount. Select a payment term of 7-30 days. The Calculator will compute for the total repayment amount.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>What is the interest rate?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>Upon approval, a 1% per day interest rate is applied. In case of overdue, we will charge an overdue fee of 500php per week.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Are all costs really published? Are there hidden costs?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>Beside the 1% per day interest rate, we will include an additional processing surcharge. The online Calculator will compute your total repayment amount. Please note that the fee is activated for the processing of the loan and before the loan is disbursed.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="faqMainBox">
        <h1 class="faqTitle">About the loan</h1>
        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Who can use cashkart loan services?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>Cashkart currently offers personal loans services to the customers:Between 22 to 50 years old.</p>
                    <p>Currently employed or with a stable income and with a valid home address in Metro Manila and other selected areas in the Philippines</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>How to apply for a loan?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>Fill up the online application form. Please expect a message from us immediately for the additional requirements. Check the email you registered. Make sure that you submit complete and clear copies of the document requirements so that we can easily process your loan applications.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Why do you need a bank account here?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p class="PList">For a secured transaction, we only deposit for the approval loan proceeds to a bank account number under your name. We deposit, via DragonPay, or any of the bank savings account in any of the following partner banks below:</p>
                    <p class="PList">Banco de Oro</p>
                    <p class="PList">BPI</p>
                    <p class="PList">BPI Family Savings</p>
                    <p class="PList">Metrobank</p>
                    <p class="PList">UCPB</p>
                    <p class="PList">Unionbank</p>
                    <p class="PList">Eastwest Bank</p>
                    <p class="PList">Security Bank</p>
                    <p class="PList">Landbank</p>
                    <p class="PList">PNB</p>
                    <p class="PList">Aisa United Bank</p>
                    <p class="PList">Robinsons Bank</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>How will I know if I am approved?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>A decision of your loan application will be sent to you through SMS/E-mail within 1-2 working days upon your submission of complete and clear document requirements. Cashkart assesses all applicants fairly and quickly.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Which city does Cashkart currently offer the loan?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p class="PList">Cashkart only provides the loan services primarily to customers who are employed and with a valid home address in the metro manila.
                    I need assistance from a customer service representative. Can I still contact you?</p>
                    <p class="PList">We would be glad to assist you. Please give us some time to respond to your question</p>
                    <p class="PList">General Inquires</p>
                    <p class="PList">Facebook：cashkart.ph</p>
                    <p class="PList">E-mail:  info@cashkart.ph</p>
                    <p class="PList">Website:  www.cashkart.ph</p>
                    <p class="PList">About disbursement </p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>How can I know my loan is approved?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>As long as you meet our loan requirements, you will received an SMS/Email from us. You will need to log in to the app within 72 hours to determine the loan contract. We will automatically disburse the money into your bank account within 24 hours after you agree and confirm the contract.  Please Pay attention to check your emails and bank accounts.</p>
                </div>
            </div>
        </div>

    </div>

    <div class="faqMainBox">
        <h1 class="faqTitle">About repayment</h1>
        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>When do I have to pay for my loan?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>We have included a section in your contract with details of your loan maturity and when you need to make your loan repayment. We advise paying on time or before the due date/s to prevent any extra charges on your loan.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Where can I make loan repayment?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>We partner with DragonPay to easily facilitate repayments. Repayment instructions are sent through E-mail for your convenience. (Right now DragonPay is our only payment method.)</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>How do I make loan repayment?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>Go to one of our payment partner branches. Complete a bills payment form and use the reference number we have sent you through SMS and E-mail.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Can I early make the payment?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>We advise you to make the payment as early as possible.</p>
                </div>
            </div>
        </div>

        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>Can I make the late payment?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>We advise you to make the payment on your due date on time or before the maturity date/s. For late repayments, you will be charged with extra charges as stated in our contract.</p>
                </div>
            </div>
        </div>

    </div>

    <div class="faqMainBox">
        <h1 class="faqTitle">Others</h1>
        <div class="faqBox">
            <p class="littleTitle pr"  @click="Dosild"  rel="0">
                <span class="listLogo">
                </span><span>How can I reloan?</span>
            </p>
            <div class="slideBox">
                <div class="slideBox_main">
                    <p>We thank you for continuing to trust us in providing you with your immediate financial needs. We welcome for the repeater borrowers. If you are a borrower with good payment standing at cashkart, we can easily approve your loan immediately. Sign in to submit your application and we will process your application within 24 hours.</p>
                </div>
            </div>
        </div>
    </div>

    


    

  </div>
  </transition>
</template>
<script>
  
  var vum = {
    name: 'Temporary',
    created:function(){
        this.show =true;
    },
    data: () => ({
        show:false,
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

<style lang="scss" src="../assets/css/faq.css" scoped>
	
<!-- @import '../assets/css/faq.css'; -->
  
</style>
<style>
    /* 开始过渡阶段,动画出去阶段 */
    .fade-enter-active,.fade-leave-active{
      transition: all 0.5s ease-out;
    }
    /* 进入开始 */
    .fade-enter{
      transform: translateX(-500px);
      opacity: 0;
    }
    /* 出去终点 */
    .fade-leave-active{
      transform: translateX(500px);
      opacity: 0;
    }
</style>
