$("#lngEng").click(function() {
    $("#lngFr").removeClass('active');
    $("#lngFr").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngEng").addClass('active');
    $("#lngEng").find('img').attr('src', 'images/checkedBox.svg');
   
    $("#lngAr").removeClass('active');
    $("#lngAr").find('img').attr('src', 'images/checkbox.svg');
    english();
});

$("#lngFr").click(function() {
    $("#lngFr").addClass('active');
    $("#lngFr").find('img').attr('src', 'images/checkedBox.svg');
    
    $("#lngEng").removeClass('active');
    $("#lngEng").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngAr").removeClass('active');
    $("#lngAr").find('img').attr('src', 'images/checkbox.svg');

    $('[data-state]').attr('data-state', 'nicesnippets');
    french();
});

$("#lngAr").click(function() {
    $("#lngFr").removeClass('active');
    $("#lngFr").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngEng").removeClass('active');
    $("#lngEng").find('img').attr('src', 'images/checkbox.svg');
    
    $("#lngAr").addClass('active');
    $("#lngAr").find('img').attr('src', 'images/checkedBox.svg');
    arabic();
});

/*--- English ---*/
function english() {
    $('body').attr('dir', 'ltr');
    $('[data-state]').attr('data-state', 'How are you doing');
    $('[data-state-excited]').attr('data-state-excited', 'Excited');
    $('[data-state-neutral]').attr('data-state-neutral', 'Neutral');
    $('[data-state-bored]').attr('data-state-bored', 'Bored');
    $('[data-are-you]').attr('data-are-you', 'Are you excited to make change');
    $('[data-are-you-yes]').attr('data-are-you-yes', 'Yes');
    $('[data-are-you-no]').attr('data-are-you-no', 'No');
    $('[data-btn-next]').attr('data-btn-next', 'Next');
    $('[data-name]').attr('data-name', 'Name,  family name');
    $('[data-contact]').attr('data-contact', 'How can we contact you');
    $('[data-field]').attr('data-field', 'Field you study');
    $('[data-level]').attr('data-level', 'Level of study');
    $('[data-formality]').attr('data-formality', 'Formality');
    $('[data-other]').attr('data-other', 'Other:');
    $('[data-btn-previous]').attr('data-btn-previous', 'Previous');
    $('[data-female]').attr('data-female', 'Miss');
    $('[data-male]').attr('data-male', 'Mister');
    $('[data-share-with]').attr('data-share-with', 'Feel free to share with us');
    $('[data-clarifying]').attr('data-clarifying', 'Your social media, so we can know more about you');


    $('[data-feel-free]').attr('data-affiliation', 'Feel free to answer the following');
    $('[data-affiliation]').attr('data-affiliation', 'Any Affiliation to scientific clubs or external organization or internal to university? if yes, mention it ?');
    $('[data-cultural]').attr('data-cultural', 'Have you ever participated in or organized cultural activities?');
    $('[data-motivation]').attr('data-motivation', 'What is your motivation when joining Atlas?');
    $('[data-conflict]').attr('data-conflict', 'How do you deal with conflict?');
    $('[data-skills]').attr('data-skills', 'What can you offer the club? (your interests / skills / personality).');
    $('[data-btn-submit]').attr('data-btn-submit', 'submit');
    $('[data-error-message]').attr('data-error-message', 'Please answer to the questions');


    
    $('#default-option').text('Misters / Miss');
    $('option[value=male]').text('Mister');
    $('option[value=female]').text('Miss');


    $('input[name="full_name"]').attr("placeholder", "please enter your name");
    $('input[name="email_phone"]').attr("placeholder", "email, or phone number");
    $('input[name="field"]').attr("placeholder", "what you study on university");
    $('input[name="level"]').attr("placeholder", "what is your level");
    $('input[name="facebook"]').attr("placeholder", "link");
    $('input[name="instagram"]').attr("placeholder", "@username");
    $('input[name="linkedin"]').attr("placeholder", "@username");

    $('input[name="cultural"]').attr("placeholder", "yes / no");
}

function french() {
    $('body').attr('dir', 'ltr');
    $('[data-state]').attr('data-state', 'Comment ça va');
    $('[data-state-excited]').attr('data-state-excited', 'Excité(e)');
    $('[data-state-neutral]').attr('data-state-neutral', 'Neutre');
    $('[data-state-bored]').attr('data-state-bored', 'Ennuyé(e)');
    $('[data-are-you]').attr('data-are-you', 'Êtes-vous impatient de faire le changement');
    $('[data-are-you-yes]').attr('data-are-you-yes', 'Oui');
    $('[data-are-you-no]').attr('data-are-you-no', 'Non');
    $('[data-btn-next]').attr('data-btn-next', 'suivant');
    $('[data-name]').attr('data-name', 'Nom, nom de famille');
    $('[data-contact]').attr('data-contact', 'Comment pouvons-nous vous contacter');
    $('[data-field]').attr('data-field', 'Domaine que vous étudiez');
    $('[data-level]').attr('data-level', 'Niveau d\'études');
    $('[data-formality]').attr('data-formality', 'Formalité');
    $('[data-other]').attr('data-other', 'Autre:');
    $('[data-btn-previous]').attr('data-btn-previous', 'Précédent');
    $('[data-female]').attr('data-female', 'Madame (Mademoiselle)');
    $('[data-male]').attr('data-male', 'Monsieur');
    $('[data-share-with]').attr('data-share-with', 'N\'hésitez pas à partager avec nous');
    $('[data-clarifying]').attr('data-clarifying', 'Vos réseaux sociaux, pour que nous en sachions plus sur vous');


    $('[data-feel-free]').attr('data-affiliation', 'Vous êtes libre de répondre à ce qui suit');
    $('[data-affiliation]').attr('data-affiliation', 'Toute affiliation à des clubs scientifiques ou à une organisation externe ou interne à l\'université ? si oui, le mentionner ?');
    $('[data-cultural]').attr('data-cultural', 'Avez-vous déjà participé ou organisé des activités culturelles?');
    $('[data-motivation]').attr('data-motivation', 'Quelle est votre motivation en rejoignant Atlas ?');
    $('[data-conflict]').attr('data-conflict', 'Comment gérez-vous les conflits ?');
    $('[data-skills]').attr('data-skills', 'Que pouvez-vous offrir au club ? (vos intérêts / compétences / personnalité).');
    $('[data-btn-submit]').attr('data-btn-submit', 'envoyer');

    $('[data-error-message]').attr('data-error-message', 'Veuillez répondre aux questions');
    
    $('#default-option').text('Me / Mme');
    $('option[value=male]').text('Monsieur');
    $('option[value=female]').text('Madame (Mademoiselle)');

    
    $('input[name="full_name"]').attr("placeholder", "Veuillez entrer votre nom");
    $('input[name="email_phone"]').attr("placeholder", "e-mail ou numéro de téléphone");
    $('input[name="field"]').attr("placeholder", "ce que vous étudiez à l'université");
    $('input[name="level"]').attr("placeholder", "quel est ton niveau");
    $('input[name="facebook"]').attr("placeholder", "lien");
    $('input[name="instagram"]').attr("placeholder", "@username");
    $('input[name="linkedin"]').attr("placeholder", "@username");
    $('input[name="cultural"]').attr("placeholder", "oui / non");
}

function arabic() {
    $('body').attr('dir', 'rtl');
    $('[data-state]').attr('data-state', 'كيف حالك');
    $('[data-state-excited]').attr('data-state-excited', 'متحمسـ(ـة)');
    $('[data-state-neutral]').attr('data-state-neutral', 'حيادي');
    $('[data-state-bored]').attr('data-state-bored', 'مضايقـ(ـة)');
    $('[data-are-you]').attr('data-are-you', 'هل أنت متشوق لإجراء التغيير');
    $('[data-are-you-yes]').attr('data-are-you-yes', 'نعم');
    $('[data-are-you-no]').attr('data-are-you-no', 'لا');
    $('[data-btn-next]').attr('data-btn-next', 'التالية');
    $('[data-name]').attr('data-name', 'اسم اللقب');
    $('[data-contact]').attr('data-contact', 'كيف يمكننا الاتصال بك');
    $('[data-field]').attr('data-field', 'المجال الذي تدرسه');
    $('[data-level]').attr('data-level', 'المستوى الدراسي');
    $('[data-formality]').attr('data-formality', 'شكلي');
    $('[data-other]').attr('data-other', 'آخر:');
    $('[data-btn-previous]').attr('data-btn-previous', 'الرجوع');
    $('[data-female]').attr('data-female', 'انسة');
    $('[data-male]').attr('data-male', 'سيد');
    $('[data-share-with]').attr('data-share-with', 'لا تتردد في مشاركتنا');
    $('[data-clarifying]').attr('data-clarifying', 'شبكات التواصل الاجتماعي الخاصة بك ، حتى نعرف المزيد عنك');
    
    $('[data-feel-free]').attr('data-affiliation', 'أنت حر في الرد على ما يلي');
    $('[data-affiliation]').attr('data-affiliation', 'أي انتماء إلى نوادي علمية أو منظمة خارجية أو داخلية بالجامعة؟ إذا كان الأمر كذلك ، أذكرها؟');
    $('[data-cultural]').attr('data-cultural', 'هل سبق لك أن شاركت أو نظمت أنشطة ثقافية؟');
    $('[data-motivation]').attr('data-motivation', 'ما هو دافعك للانضمام إلى نظام أطلس؟');
    $('[data-conflict]').attr('data-conflict', 'كيف تتعامل مع الصراعات؟');
    $('[data-skills]').attr('data-skills', 'ماذا يمكنك ان تقدم للنادي؟ (اهتماماتك / مهاراتك / شخصيتك).');
    $('[data-btn-submit]').attr('data-btn-submit', 'إرسال');

    $('[data-error-message]').attr('data-error-message', 'الرجاء الرد على الأسئلة');


    $('#default-option').text('انسة / سيد');
    $('option[value=male]').text('انسة');
    $('option[value=female]').text('سيد');

    $('input[name="full_name"]').attr("placeholder", "يرجى إدخال اسمك");
    $('input[name="email_phone"]').attr("placeholder", "البريد الإلكتروني أو رقم الهاتف");
    $('input[name="field"]').attr("placeholder", "ماذا تدرس في الجامعة");
    $('input[name="level"]').attr("placeholder", "ما هو مستواك");
    $('input[name="facebook"]').attr("placeholder", "رابط");
    $('input[name="instagram"]').attr("placeholder", "@username");
    $('input[name="linkedin"]').attr("placeholder", "@username");

    $('input[name="cultural"]').attr("placeholder", "نعم / لا");
}



