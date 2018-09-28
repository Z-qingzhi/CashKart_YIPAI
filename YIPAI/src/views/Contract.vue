<template>
  <div>
      <div class="container">
          <!-- <vue-header v-if="state==0"></vue-header> -->
          <!-- <div class="MBLogo2" v-if="state==0"></div> -->
          <div class="content">

            <div class="ypMain middleBox">
              <h1 class="titleH1 YPBOX HTBT" >MINTWAGON LENDING CORP.<br/> DISCLOSURE STATEMENT<br/> ON LOAN/CREDIT TRANSACTION<br><font class="FW">(As required under R.A. 3765, Truth in Lending Act)</font></h1>
              <p><span class="FW8" :class="{LW:checkMachine==2}">NAME OF BORROWER:</span>{{loanAgreement.fullName}}</p>
              <p><span class="FW8" :class="{LW:checkMachine==2}">HOME ADDRESS:</span>{{loanAgreement.address}}</p>
              <p><span class="FW8" :class="{LW:checkMachine==2}">BIRTH DATE:</span>{{loanAgreement.birth}} <span class="RgTx" v-if="checkMachine==2"><span class="FW8" :class="{LW:checkMachine==2}">LOAN AGREEMENT NO :</span>{{loanAgreement.contractNum}}</span></p>
              <p v-if="checkMachine==1"><span class="FW8" :class="{LW:checkMachine==2}">LOAN AGREEMENT NO :</span>{{loanAgreement.contractNum}}</p>
              <p><span class="FW8">LOAN GRANT DATE:</span>{{loanAgreement.feeIStartDate|formatfullDate}} <span class="RgTx" v-if="checkMachine==2"><span class="FW8" :class="{LW:checkMachine==2}">LOAN DUE DATE:</span>{{loanAgreement.expireDate |formatfullDate}}</span></p>
              <p v-if="checkMachine==1"><span class="FW8" :class="{LW:checkMachine==2}">LOAN DUE DATE:</span>{{loanAgreement.expireDate|formatfullDate}}</p>

              <p class="FGX"><span class="FW8">1. Account Amount:</span><span :class="{RightBox:checkMachine==2}">{{loanAgreement.arrivalAmount}} PHP</span></p>
              <p><span class="FW8">Principal of the Loan:</span><span :class="{RightBox:checkMachine==2}">{{loanAgreement.amount}} PHP</span></p>
              <p><span class="FW8">2. FINANCE CHARGES</span></p>
              <p><span class="FW8">a. Service Fee(it will be direct deducted on the loan amount):</span><span :class="{RightBox:checkMachine==2}"> p {{loanAgreement.feeCharge|fmoney(2)}}</span></p>
              <p><span class="FW8">b. Processing Fee:</span><span :class="{RightBox:checkMachine==2}"> p 0.00</span></p>
              <p><span class="FW8">c. Others:</span><span :class="{RightBox:checkMachine==2}">p 0.00</span></p>
              <p><span class="FW8">3.INTEREST (it will be direct deducted on the loan amount)</span><span :class="{RightBox:checkMachine==2}"> P {{loanAgreement.feeInterest|fmoney(2)}}</span></p>
              <p><span class="FW8">4. SCHEDULE OF PAYMENT/S</span></p>
              <p><span class="FW8">a. Single Payment Due on:</span><span :class="{RightBox:checkMachine==2}">{{loanAgreement.expireDate |formatfullDate}} p {{loanAgreement.totalamount |fmoney(2)}}</span></p>
              <p><span class="FW8">5. CONDITIONAL CHARGES Rate Amount</span></p>

              <p  v-if="loanAgreement.isOldData==1"><span class="FW8">a. Overdue interest:</span><span :class="{RightBox:checkMachine==2}">{{loanAgreement.yuqidaylixi |toPercent}} per day</span></p>
              <p  v-if="loanAgreement.isOldData!=1"><span class="FW8">a.Late Payment fee (charged 500php based on per week):</span><span :class="{RightBox:checkMachine==2}"> p 0</span></p>
              <p><span class="FW8">b. Prepayment</span><span :class="{RightBox:checkMachine==2}"> p 0</span></p>
              <p><span class="FW8">c. Penalty</span><span :class="{RightBox:checkMachine==2}"> p 0</span></p>

              <p class="termandcondition__subtitle">I ACKNOWLEDGE RECEIPT OF THIS DISCLOSURE STATEMENT PRIOR TO THE CONSUMMATION OF THE CREDIT TRANSACTION AND THAT I UNDERSTAND AND FULLY AGREE TO THE TERMS AND CONDITIONS THEREOF.</p>
              <div class="signatureImg">
                <div class="XZ"  :style ="note">
                  <!-- <img :src="userList.signaturePhoto" alt=""> -->
                </div>
              </div>
              <div class="clear"></div>

              <h2 class="titleH1 YPBOX HTBT" >LOAN AGREEMENT No {{agreementServices.contractNum}}</h2>
              <p>This Loan Agreement (“Agreement” or “Loan Agreement”) made and entered into this {{agreementServices.transferDate|formatfullDate}}, at BGC, Metro Manila, Philippines,by and between: {{agreementServices.address}} (hereinafter referred to as the <span class="FW8">“BORROWER”</span>);</p>
              <p class="TXC">And</p>
              <p><span class="FW8">MINTWAGON LENDING COR.,</span>doing business under the name of MINTWAGON a corporation duly organized and existing under and by virtue of the laws of the Philippines, with address and place of business at 8th floor sun life centre building ,5th ave, bonifacio global city fort bonifacio, taguig city represented in this Agreement by Mintwagon referred to as <span class="FW8">“LENDER”</span>);(Each of the Borrower and the Lender in this Agreement may be referred to as a “Party” in the singular, or the “Parties”, collectively)</p>

              <h2 class="titleH1 YPBOX HTBT">ACKNOWLEDGED THAT</h2>
              <p><span class="FW8">WHEREAS,</span> at the request of the Borrower, the Lender has agreed to extend a loan to the Borrower in the amount stated below, subject to the terms and conditions set forth herein (the<span class="FW8">“Terms and Conditions”</span>);</p>
              <p><span class="FW8">NOW, THEREFORE,</span> for and in consideration of the foregoing premises and of the mutual covenants and agreements hereinafter stated, the Parties hereto agree as follows:</p>

              <h2 class="titleH1 YPBOX HTBT">TERMS AND CONDITIONS ON THE LOAN</h2>
              <p><span class="FW8">I.  LOAN AMOUNT.</span> The Lender has agreed to lend to the Borrower the amount of PhP {{agreementServices.amount}}, Philippine Currency (the“Loan” or the“Personal Loan”). </p>
              <p><span class="FW8">II. PURPOSE.</span> The Borrower undertakes to use the Loan, or any portion thereof, for legitimate and legal purposes only, and shall not be used for any purpose, or in any endeavor, which is against Philippine laws, rules, and regulations. </p>
              <p><span class="FW8">III. TERM.</span> The Loan shall have a term of ({{agreementServices.days}}) calendar days (the “Loan Term”), which term shall start from the date of the Borrower’ receipt of the Loan, or any portion thereof.</p>
              <p><span class="FW8">IV. DUE DATE.</span> The expiration of the Loan Term shall be on {{agreementServices.expireDate|formatfullDate}} (the “Due Date/Payment Date/Pay Day”).</p>
              <p>In the event of the extension of a Loan Term, the expiration of such extended Loan Term shall be on a date set by the Lender (the “Extended Due Date”).</p>
              <p><span class="FW8">V. LOAN TERM EXTENSION.</span> The Loan Term may be extended subject to additional terms and conditions set by the Lender, such as, but not limited to, the following:</p>
              <p>a. The Borrower shall request for an extension of the Loan Term from the Lender on or before the Due Date.</p>
              <p>b.Every request for extension of the loan term only able to extend 7 days and 15 Days. There will be extra charges on the extension based on the term that you choose.</p>
              <p>c.The Borrower shall pay additional fees, charges, and/or interests (the “Loan Term Extension Fees”); and</p>
              <p>d.If the Borrower requests for an extension of the loan term after Due Date, the extension of the loan term commences from the date the Borrower complies with all the terms and conditions under this Section. </p>
              <p>e.  For the interest rate and services fees it will be deduct on the loan that from your application in advance.</p>
              <p>f.For the overdue account user, we will not return the deposit to the user.</p>

              <p>In the event the Borrower requests for additional extensions of the Loan Term, over and above the initial request for extension of the loan term, the additional terms and conditions shall likewise apply:</p>
              <p>a.The Borrower shall request for an additional extension of the Loan Term from the Lender on or before the Extended Due Date/s. </p>
              <p>b.Each additional request for extension of the loan term shall not exceed fifteen(15) days from the Extended Due Date; </p>
              <p>c.The Borrower shall pay the Loan Extension Fees for each request for extension of the loan term;</p>
              <p>d.If the Borrower requests for an additional extension of the loan term after the Extended Due Date, the extension of the loan term commences from the date the Borrower complies with all the terms and conditions under this Section.</p>

              <p><span class="FW8">VI. LOAN RELEASE.</span>The Loan shall be released to the Borrower through <span class="FW8">Bank Transfer to {{agreementServices.bankName}} with Account Number {{agreementServices.bankAccount}}. </span>No release under the Loan shall be made unless the Borrower complies with all the conditions required by the Lender and the provisions of this Agreement. The Borrower’s receipt of the Loan, or any portion thereof, shall signify his/her agreement to all the terms and conditions of the Agreement. </p>

              <p><span class="FW8">VII. PAYMENT.</span> The Borrower shall pay the Loan, including all applicable fees, charges, and/or interests, in full, on or before Due Date, without need of any further notice or demand from the Lender. <!-- The borrower fails to repay the loan in full at the date of maturity, for the first time once the lender may borrowers three (3) days grace period, pay during the term of the loan or the balance (the amount of payment need to add margin). --></p>
              <p>All payments to be made by the Borrower under this Agreement shall be paid to the Lender before the due date day. As reminder only valid payment receipt must be uploaded to the website or application in lalapeso only will be counted as a proof for the payment. Any payment made by the Borrower after such time shall be considered as payment made for the next working day, and shall be subject to applicable fees and charges.</p>

              <p><span class="FW8">VIII. FEES AND CHARGES.</span> The Borrower shall, for his/her own account, pay all reasonable costs, charges, fees, and/or expenses incurred in connection with the release of the Loan, and any other documentation required thereunder and/or any amendment of the Agreement, which total reasonable costs, charges, fees, and/or expenses may include a service fee, processing fee, documentary stamp tax, and other legal fees.</p>
              <p>The Borrower shall also reimburse the Lender on demand for all reasonable and documented expenses incurred by them, including reasonable expenses and fees of external counsel, when applicable, (i) in connection with the enforcement and administration of the Loan Agreement from and after the occurrence of an Event of Default (as defined in the Section XVI of this Agreement), or (ii) with respect to any action which may be instituted by any person against the Lender in respect of any of the foregoing or as a result of any transaction, action or non-action arising from the foregoing. Such expenses shall be reimbursed whether or not the Lender gives notice of such Event of Default or demand acceleration of the Loan or take other action to enforce the provisions of this Agreement, unless the Lender waives the Event of Default and in such waiver specifically waive reimbursement of administration and enforcement expenses resulting from such waived Event of Default;</p>
              <p>provided that in every case the Borrower shall have the right to contest prior to or after the payment thereof the correctness or reasonableness of the expenses incurred. It is understood that expenses shall not include representation expenses of any kind.</p>
              <p>All applicable fees, charges, and/or interests on the Loan shall be indicated in the Disclosure Statement attached hereto.</p>

              <p><span class="FW8">IX. INTEREST.</span> The Borrower agrees to pay the Lender interest on the Loan, or the balance thereof, if applicable, at the rate of 1%, per Day. </p>

              <p><span class="FW8">X. LATE PAYMENT FEES.</span> If the Borrower fails to pay in full the Loan, and other applicable fees, charges, and/or interests, there will be addition charges 500php per week. To the Lender on Due Date, or at an earlier date by acceleration or otherwise, without a Loan Term Extension, the Borrower agrees and understands that he/she shall be liable unconditionally to pay, without prior written notice from the Lender, a late payment fee, payable together with and in addition to the principal amount of the Loan and other applicable fees, charges, and/or interests due. </p>

              <p>The borrower agrees and understands that he or she will also be charged an additional late fee if he or she fails to pay the loan before the due date.</p>

              <p><span class="FW8">XI. LOAN TERM EXTENSION FEE.</span> If a Loan Term Extension is granted to the Borrower’s Loan, the Borrower agrees and understands that he/she shall pay the Lender a Loan Term of the unpaid Loan, including applicable fees, charges, and/or interests. The Loan Term Extension Fee shall be charged to, and shall be paid by, the Borrower on the Extended Due Date, in accordance with the application of payment described in Section XI of this Agreement. </p>

              <p><span class="FW8">XII. APPLICATION OF PAYMENT.</span> Any payment made by the Borrower to the Lender shall be applied in the following order: </p>
              <p>a. against reasonable costs, expenses and indemnities due hereunder, if any; </p>
              <p>b.against service fees; </p>
              <p>c. against the Loan Term Extension Fees, if any; </p>
              <p>d.against the principal amount of the Loan then due and payable;</p>
              <p>e. against the late payment fee/s, if any.</p>

              <p><span class="FW8">XIII. PRE-PAYMENT.</span> The Borrower may pre-pay the Loan, including applicable fees, charges, and/or interests, as long as the full amount of the Loan is paid on or before Due Date. </p>

              <p><span class="FW8">XIV. BORROWER’S PARTICULARS.</span> The Borrower shall notify the Lender promptly in writing of any change in his employment office, home address, and contact information and as may be required by the Lender, any other information previously provided to the Lender in connection with the Loan. Absent any written notification from the Borrower of the change of his particulars referred in this Section, the Lender shall send all notices to the Borrower’s particulars on record, to which the Lender shall be considered in good faith and compliant to applicable laws and regulations.</p>

              <p><span class="FW8">XV. COMMUNICATIONS.</span> All messages or communications sent to the Borrower’s contact details provided to the Lender, including approval of the Loan, are considered to be duly received by the Borrower if the message is sent by the Lender to the email address or phone number registered by the Borrower. Once the message is sent by the Lender to the email address or phone number registered, the Lender is no longer responsible for its security, confidentiality, or any acts of any respective service providers (email service provider, mobile operator), nor any acts caused by unauthorized use of the Borrower’s email address or phone number. </p>
              <p>In order for the Lender to render prompt and accurate service, the Borrower authorizes the Lender to record, without the Lender being necessarily obligated to do so, any and all telephone conversations between the Borrower and the Lender, regardless of who initiated the telephone conversation. Such authorization to record includes, but is not limited to, recording of instructions, statements, complaints, inquiries by the Borrower, and information regarding the loan and reminders by the Lender. The Lender may use the recorded telephone conversation as proof of the Borrower’s acceptance to any offer or additional or revision of terms made through telephone. The Lender may also use such recordings for any legal purpose, particularly as evidence in any judicial or administrative hearing or proceeding.</p>

              <p><span class="FW8">XVI. EXEMPTION FROM LIABILITIES.</span> To the extent not contrary to applicable law, the Lender shall not be responsible for any losses or damages which the Borrower or any other person(s) may suffer or incur due to any delay or refusal of the Lender to grant or to continue to grant the whole or part of the Loan to the Borrower and shall not be obliged to give any reason for such delay or refusal.</p>
              <p>Without prejudice to the foregoing, and to the extent not contrary to applicable law, the Lender shall not in any event be responsible for or liable to the Borrower for any losses or damages which the Borrower may suffer in respect of any revision of the amount, suspension or termination of the Loan, changes to any of these Terms and Conditions or any other exercise of the Lender's rights under these Terms and Conditions, at law or in equity.</p>

              <p><span class="FW8">XVII. EVENT OF DEFAULT.</span> Without prejudice to any other terms in the Loan Agreement and the Lender’s right to demand immediate repayment of the Loan which is repayable on demand, the Borrower shall immediately repay, on demand, and without need for notice or demand from the Lender, the Loan, and applicable charges and fees, which are outstanding and unpaid, and all other expenses and moneys payable in relation to the Loan, upon any of the following events of default happening (the “Events of Default”):</p>
              <p>a.any other money that the Borrower owes the Lender under the Loan is not paid when due;</p>
              <p>b.The Borrower fails to pay on the due date any amount that the borrower must pay under this Agreement or does not comply with any obligation of the Borrower under this Agreement or any guarantee document.</p>
              <p>c.The Borrower breaches its obligations of payment, when due;</p>
              <p>d.Proceedings are taken against the Borrower or the Borrower's property, or the criminal case is conducted against the Borrower, which in the opinion of the Lender, may have a significant adverse effect on the Borrower's ability to perform its obligations under this Agreement;</p>
              <p>e.The Borrower commits or threatens to commit a breach of any of the terms and conditions of the Agreement;</p>
              <p>f.The Borrower becomes insolvent or the Borrower has taken any step for making of a bankruptcy petition or bankruptcy order against the Borrower;</p>
              <p>g.The Borrower dies or becomes loss of capacity for civil act; </p>
              <p>h.Any of the Borrower’s declaration or representation set out in these Terms and Conditions or the Loan Agreement relating to the Loan, as varied from time to time, is or becomes untrue; </p>
              <p>i.If any governmental authority condemns, nationalizes, seizes or otherwise expropriates, or seals, blocks or freezes, or uses for public purposes or for the purposes of national defense or security and other similar special circumstances, all or any substantial part of the property or other assets of the Borrower;</p>
              <p>j.If any provision of these Terms and Conditions governing the Loan Agreement is, or is alleged by the Borrower to be, or is declared by any governmental authority or court to be, ineffective, invalid, illegal or void, in whole or in part;</p>
              <p>k.If a court of competent jurisdiction issues a judgment or decision against the Borrower; or an arbitration body of competent jurisdiction issues an award against the Borrower; or</p>
              <p>l.   An event occurs or circumstances arise which gives the Lender reasonable grounds to believe that the Borrower may not be able to perform or comply with any of obligations.</p>

              <p><span class="FW8">XVIII. CONSEQUENCES OF DEFAULT.</span> Upon occurrence of an Event of Default, the Lender may, at its sole discretion, without need of notice or demand, and without limiting the Lender’s rights under applicable laws or under the Agreement:</p>
              <p>a. Take such action and exercise such remedies in order to protect and enforce its rights under the Agreement;</p>
              <p>b.Declare the Agreement, including all unpaid applicable fees, charges, and/or interests, to be immediately due and payable, without need of notice, demand, or protest of any kind, all of which are herein expressly waived by the Borrower;</p>
              <p>c. The applicable fees, charges, and/or interests on the Loan, as indicated in this Agreement, shall continue to run until full payment of the Loan, including all fees, charges, and/or interests, have been paid.</p>
              <p>d.The rights available to the Lender under the Agreement may be exercised by the Lender alternatively, successively, concurrently, and/or cumulatively, at the option of the Lender.</p>

              <p><span class="FW8">XIX. DISCLOSURE INFORMATION.</span> The Borrower irrevocably and unconditionally consents for the Lender, and any officer of the Lender, to disclose any customer information relating to the Borrower or any information whatsoever relating to the Borrower as the Lender shall consider appropriate to any person to whom disclosure is permitted or required by any statutory provision or law or to any other person wherever situate for any purpose whatsoever and it is hereby agreed that the Lender and any officer of the Lender may disclose the foregoing information to the fullest extent permitted by any statutory provision or law.</p>
              <p>The rights conferred on the Lender herein shall be in addition to and shall not be in any way prejudiced or affected by any other agreement, expressed or implied, between the Borrower and the Lender in relation to any information referred to herein nor shall any such other agreement be in any way prejudiced or affected by any provision herein. This consent and provision shall survive the termination of Agreement, and/or the termination of any relationship between the Borrower and the Lender, for any reason whatsoever.</p>

              <p><span class="FW8">XX. PRIVACY IN INFORMATION.</span> Subject to Section 13 of this Agreement, the Lender shall observe privacy of personal information of the Borrower obtained in connection with the Loan Documents. The Lender, including its employees, agents, representatives, officers, and directors, who are involved in the processing of the Borrower’s personal information, shall operate and hold personal information under strict confidentiality, which undertaking shall survive the termination of this Agreement. </p>

              <p><span class="FW8">XXI.PROCESSING AND USE OF INFORMATION.</span> The Borrower expressly consents to the use by the Lender of any information provided by the Borrower, or otherwise obtained by the Lender, in relation to or in connection with the Agreement, for the purpose of enforcing the Borrower’s obligations under the Agreement. The Borrower likewise expressly consents to the collection and processing of personal information about and/or relating to the Borrower, and to transfer of such information to third parties, including, without limitation, any of the affiliates or subsidiaries of the Lender, credit bureaus, government agencies, and collection agencies. </p>

              <p><span class="FW8">XXII.REPRESENTATIONS AND WARRANTIES.</span></p>
              <p>a.The Borrower warrants and represents that all information, declarations, representations, and warranties made or given by him or as evidenced by any documents given to the Lender in connection with the Loan and all particulars indicated in the Agreement relating thereto are and will continue to be true and correct in all respects and will be complied with at all times.</p>
              <p>b.No litigation, arbitration or administrative proceeding is taking place or pending or threatened against the Borrower or its assets, and no tax liability claim is taking place or pending or threatened against the Borrower or its assets.</p>
              <p>c.The Borrower confirms that the Lender is entitled to rely on the said information, declarations, representations and warranties in granting the Loan and that he shall immediately upon request furnish the Lender with all such documents, statements, information and explanation as may be reasonably required by the Lender from time to time regarding his affairs, state or condition, financial or otherwise, that may affect the Lender's decision in granting or in continuing to grant the Loan to the Borrower.</p>
              <p>d.The Lender agrees to offer the Loan which can be unsecured, partially secured, or fully secured type. However, in case that there is any change on security requirement as caused by any reason, the Lender reserves the right to change the conditions of security type of the Loan at any time. Moreover, the Loan may be terminated at the Lender's absolute discretion and the whereupon all monies owing to the Lender under the Loan and these Terms and Conditions together with all charges (if any) thereon shall immediately become due and payable to the Lender.</p>

              <p><span class="FW8">XXIII. TERMINATION.</span> The Borrower may terminate the Loan by giving the Lender written notice of such termination and by paying all monies owing under the Loan and these Terms and Conditions together with all fees, charges, and/or interests, if any.</p>
              <p>Notwithstanding anything to the contrary herein, the Lender may at any time at its absolute discretion cancel the Loan and terminate the Loan Agreement without giving any reason therefore and without prior notice to the Borrower to the extent not contrary to applicable law. All monies owing under the Loan and these Terms and Conditions together with all charges, if any, shall immediately become due and payable on demand.</p>

              <p><span class="FW8">XXIV. ATTORNEY’S FEES.</span> If the Lender shall require the services of a legal counsel to enforce any of its rights and remedies under this Agreement, the Lender shall be entitled to recover from the Borrower, as attorney’s fees, a sum equal toOne Hundred PERCENT (100.00 %) of the sum sought to be recovered, which in no case shall be less thanTwo Thousand Five Hundred PESOS (PHP 2,500.00), in addition to costs of suit, and all other fees, charges, and/or interests incurred by and reimbursable to the LENDER by the BORROWER.</p>

              <p><span class="FW8">XXV. OTHER TERMS AND CONDITIONS.</span></p>
              <p><span class="FW8">a.ASSIGNMENT.</span> The Lender may assign or transfer any or all its rights in this Agreement without the Borrower’s consent. The Borrower may not assign or transfer any of his/her rights under this Agreement without the Lender’s prior written consent.</p>
              <p><span class="FW8">b.NON-EXCLUSIVITY.</span> No right or remedy conferred upon or reserved to either party herein is exclusive of any other right or remedy herein, or that provided or permitted by law or equity; but each shall be cumulative of any other right or remedy available to such party under this Agreement and existing laws.</p>
              <p><span class="FW8">c.COMPLETE AGREEMENT.</span> This Agreement constitutes the entire agreement between the parties and shall supersede any and all prior or contemporaneous agreements between them, whether written or oral. No amendment of this Agreement shall be valid unless made in writing and signed by the parties.</p>
              <p><span class="FW8">d.AMENDMENT.</span> To the extent not contrary to applicable laws and regulations, the Lender may, at any time, at its absolute discretion and upon notice, whether in written form or otherwise, to the Borrower, change any one or more terms and conditions under this Agreement, as well as changing the loan details in the Loan Agreement, including but not limited to: the loan amount,interest rate, installment amount, installment due date. Such change/s shall take effect from the date stated in the notice. If the Borrower is not agreeable to such amendments,the Borrower must terminate the Loan Agreement by written notice to the Lender before the said effective date, and all sums owing and charges, if any, by the Borrower with respect to the Loan and these Terms and Conditions shall be paid to the Lender in full. The continued use of the Loan by the Borrower, notwithstanding the notice, shall automatically deemed to be an implied agreement to the amendments </p>
              <p><span class="FW8">e.BINDING ON SUCCESSORS AND ASSIGNS.</span> This Agreement is binding on the parties and their respective successors-in-interest and assigns. </p>
              <p><span class="FW8">f.INDULGENCE NOT WAIVER.</span> The failure of either party to insist upon a strict performance of any of the terms, conditions and covenants of this Agreement shall not be deemed a relinquishment or waiver of such breach or default unless such waiver is in writing and signed by the authorized representative of the party making the waiver.</p>
              <p><span class="FW8">g.SEVERABILITY.</span> f any one or more of the provisions of this Agreement are declared invalid, illegal, or unenforceable in any respect under the applicable law by any competent court, the validity, legality, or enforceability of the remaining provisions contained herein shall not in any way be affected or impaired.</p>
              <p><span class="FW8">h.GOVERNING LAW.</span> This Agreement shall be governed by and construed in all respects according to the laws of the Philippines.</p>
              <p><span class="FW8">i.VENUE.</span> The parties expressly agree to submit themselves exclusively to the jurisdiction of the courts of Makati City on any action or dispute arising out of this Agreement.</p>
              <p><span class="FW8">j.OUTSOURCING.</span> The Borrower agrees and allows the Lender to outsource the management and/or collection of debt as well as the litigation process to a third party,at the sole discretion of the Lender.</p>
              <p><span class="FW8">k.ELECTRONIC SIGNATURES.</span> The Lender is hereby authorized to rely upon and accept as an original any document or other communication which is sent to the Lender by facsimile, telegraphic or other electronic transmission, which the Lender in good faith believes has been signed by the Borrower and has been delivered to the Lender. Notwithstanding the foregoing, the Lender shall not be obligated to accept any such document or communication as an original and may in any instance require that an original document be submitted to the Lender in lieu of, or in addition to, any such document or communication. The signatures to this Agreement shall be as valid as an original signature of such party and shall be effective to bind such party to this Agreement.</p>
              <p><span class="FW8">l.CHANGE IN NAME.</span> The Change of the Business Name of the Lender for any reason, in all cases, shall not lead to the termination of this Agreement and the Borrower must comply with its obligations under the provisions of this Agreement.</p>
              <p><span class="FW8">m.ACCEPTANCE.</span> The Borrower confirms having read and understood and agrees to the entire Terms and Conditions constituting of above clauses. The Terms and Conditions and the other documents, such as the Disclosure Statement, have been explained to the Borrower in the language understood by the Borrower. The Borrower is aware that the Lender has agreed to grant a loan to the Borrower only after the Borrower has agreed to abide by the terms of this Agreement.</p>

              <div class="clear"></div>
              <p class="signature">MintWagon Lending CORP.</p>

              <p class="AmountAndUseText littleTitleText YPBOX"  v-if="state==0&&view==1"><span class="listLogo">*</span><span class="redText">If you accept the contract, we will transfer the money to your account.</span></p>

              <div class="btnCake" v-if="state==0&&view==1">
                <div class="contractBtn contractBtnCancel" @click="cancel()">
                  CANCEL
                </div>
                <div class="contractBtn contractBtnAgree" @click="agree()">
                  AGREE
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <vue-footer v-if="state==0"></vue-footer> -->
        <!-- <vue-menu v-if="state==0"></vue-menu> -->

      </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { publicObj, $saas } from '../assets/js/base.js'
  // import { Indicator } from 'mint-ui';
  // import 'mint-ui/lib/indicator/style.css';
  // import 'mint-ui/lib/style.css'; 
  // Vue.component(Indicator);

  var vum = {
    data: () => ({
      userList:'',
      state:1,
      view:0,
      note: {
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          },
      checkMachine:0,
      loanAgreement:'',
      agreementServices:'',
      id:'',
    }),
    mounted:function(){
          this.id = this.$route.query.apply;
          var This = this;
          publicObj.checkPC(function(){
            This.checkMachine = 1;
          },function(){
            This.checkMachine = 2;
          })
          this.getInfo();

    },
    methods:{
        getInfo:function(){
          var param = {};

          if(this.$route.query.validateCode){
            param.applyId = this.$route.query.validateCode;
            var URL = '/Business/GetContractInfoByLink'; 
          }else{
            param.accessToken = this.$route.query.ass;
            param.applyId = this.id;
            var URL = '/Business/GetContractInfo'; 
          }
          // if(this.state==0){
          //   param.accessToken = publicObj.getCookie("accessToken");
          // }
          
          var This = this;
          $saas.getJSON(URL,param,function(data){
              if(data.data==null){
                return
              }
              This.userList = data.data;
              This.loanAgreement = data.data.loanAgreement;
              This.agreementServices = data.data.agreementServices;
              This.note.backgroundImage = "url('"+This.loanAgreement.signaturePhoto+"')";
              This.note.backgroundSize = 'contain';
              This.note.backgroundPosition = 'center center';
              publicObj.checkPC(function(){
                 // This.note.transform = 'rotate(90deg)';
              },function(){

              })
          })
        },
    }
  }
  export default vum;



</script>

<style lang="scss" src="../assets/css/contract.css" scoped>
  
<!-- @import '../assets/css/contract.css'; -->
  
</style>