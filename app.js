document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('save-button');
    const resultDisplay = document.getElementById('result-display');
    const aromaText = document.getElementById('aroma-text');
    const tasteText = document.getElementById('taste-text');
    const feelText = document.getElementById('feel-text');

    saveButton.addEventListener('click', function () {
        const aromaChoices = Array.from(document.querySelectorAll('.cupping-section:nth-child(2) input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
          const aromaCustomText = aromaText.value.trim();
          const tasteChoices = Array.from(document.querySelectorAll('.cupping-section:nth-child(3) input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
            const tasteCustomText = tasteText.value.trim();
          const feelChoices = Array.from(document.querySelectorAll('.cupping-section:nth-child(4) input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        const feelCustomText = feelText.value.trim();
            const preferenceChoice = document.querySelector('input[name="preference"]:checked');
            const preferenceValue = preferenceChoice ? preferenceChoice.value : null;

          
        let aromaOutput = '';
        if(aromaChoices.length > 0){
            aromaOutput += `선택 향 : ${aromaChoices.join(', ')}`;
        }

        if(aromaCustomText !== ''){
            if (aromaOutput !== '') {
                 aromaOutput += `, 기타 향 : ${aromaCustomText}`;
              }else{
                aromaOutput += `기타 향 : ${aromaCustomText}`;
             }
        }


        let tasteOutput = '';
       if(tasteChoices.length > 0){
            tasteOutput += `선택 맛 : ${tasteChoices.join(', ')}`;
        }
        if(tasteCustomText !== ''){
            if (tasteOutput !== '') {
                tasteOutput += `, 기타 맛 : ${tasteCustomText}`;
            }else{
               tasteOutput += `기타 맛 : ${tasteCustomText}`;
             }
           
        }
        
        let feelOutput = '';
          if(feelChoices.length > 0){
            feelOutput += `느낌 : ${feelChoices.join(', ')}`;
        }
           if(feelCustomText !== ''){
             if (feelOutput !== '') {
              feelOutput += `, 기타 느낌 : ${feelCustomText}`;
            }else{
              feelOutput += `기타 느낌 : ${feelCustomText}`;
            }
           }

        let outputString = `
        향: ${aromaOutput || '선택없음'}
        맛: ${tasteOutput || '선택없음'}
        전체적인 느낌 : ${feelOutput || '선택없음'}
        선호도: ${preferenceValue || '선택없음'}`;
       
        resultDisplay.textContent = outputString;
    });
});

