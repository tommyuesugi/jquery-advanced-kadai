$(function(){
  // ボタンアニメーション
  $('.button-more').on('mouseover',function(){
    $(this).animate({
      opacity:0.5,
      marginLeft:20,
    },100);
  });
  $('.button-more').on('mouseout',function(){
    $(this).animate({
      marginLeft:0,opacity:1.0},100);
  });
  // カルーセル
  $('#carousel-section').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
  // 送信ボタンのクリック時
  $('#submit').on('click',function(event){
    // formタグによる送信を拒否
    event.preventDefault();
    // 入力チェックした結果、エラーがあるかないか判定
    let result = inputCheck();

    let error =result.error;
    let message =result.message;

    if(error == false){
      alert('お問い合わせを送信しました。')
    } else {
      alert(message);
    }
  });

  $('#name').blur(function(){
    inputCheck();
  });
  $('#furigana').blur(function(){
    inputCheck();
  });
  $('#email').blur(function(){
    inputCheck();
  });
  $('#tel').blur(function(){
    inputCheck();
  });
  $('#message').blur(function(){
    inputCheck();
  });
  $('#prefecture').blur(function(){
    inputCheck();
  });
  // フォームの入力チェック
  function inputCheck (){
    let result;

    let message='';

    let error=false;
    // お名前のチェック
    if ($('#name').val()==''){
      $('#name').css('background-color','#f79999');
      error = true;
      message += 'お名前を入力してください\n';
    }else{
      $('#name').css('background-color','#fafafa');
    }
    if ($('#furigana').val()==''){
      $('#furigana').css('background-color','#f79999');
      error = true;
      message += 'ふりがなを入力してください\n';
    }else{
      $('#furigana').css('background-color','#fafafa');
    }
    if ($('#message').val()==''){
      $('#message').css('background-color','#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください\n';
    }else{
      $('#message').css('background-color','#fafafa');
    }
    // メールアドレスのチェック
    // if ($('#email').val()=='' || $('#email').val().index0f('@')== -1 || $('#email').val().index0f('.')== -1){
    //   $('#email').css('background-color','#f79999');
    //   error = true;
    //   message += 'メールアドレスが未記入、または「＠」、「.」が含まれていません。\n';
    // }else{
    //   $('#email').css('background-color','#fafafa');
    // }
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }
    // 電話番号チェック
    if($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1){
      $('#tel').css('background-color','#f79999');
      error = true;
      message +='電話番号に「-」が含まれていません。\n';
    } else {
      $('#tel').css('background-color','#fafafa');
    }
    if($('#prefecture').val() == ''){
      $('#prefecture').css('background-color','#f79999');
      error == true;
      message += '都道府県を選択してください。\n';
      } else {
        $('#prefecture').css('background-color','#fafafa');
    }
    // 個人情報のチェックボックスのチェック
    if($('#agree').prop('checked')==false){
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }
    if (error == true){
      $('#submit').attr('src','images/button-submit.png');
    } else {
      $('#submit').attr('src','images/button-submit-blue.png');
    }

     // オブジェクトでエラー判定とメッセージを返す
     result = {
      error: error,
      message: message
    }

    // 戻り値としてエラーがあるかどうかを返す
      return result;
  }
});