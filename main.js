(()=>
{
    function generateName() 
        {
            // 사용자로부터 입력받은 주제
            let topic = document.getElementById('topicInput').value; 

            //  명령어 생성
            const order = topic + ' 주제의 함수명 변수명 3개씩 만들어줘';


            const apiKey = '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';


            //  OpenAI에 전달시킬 메세지를 정의한다.
            const messages = 
            [
                {
                    role : 'system',
                    content : 'You are helpful assistant.'
                },
                {
                    role : 'user',
                    content : order
                }
            ];

            //  HTTP 요청 헤더를 정의한다.
            const config =
            {
                headers : {
                    Authorization : 'Bearer ' + apiKey,
                    'Content-Type' : 'application/json'
                }
            }

            //  OpenAI의 API에 전달될 요청 데이터를 정의한다.
            const data = 
            {
                model : 'gpt-3.5-turbo',
                temperature:0.5,
                messages : messages
            };

            //  HTTP 요청 생성, 전달하는 라이브러리
            axios
                .post('https://api.openai.com/v1/chat/completions', data, config) // POST 요청
                .then(function (response) { // html 본문에 응답(response)의 내용을 넣어줍니다.
                    let resultDiv = document.getElementById('result')
                    resultDiv.innerHTML = ''
                    response.data.choices.forEach(function (choice, index) {
                        resultDiv.innerHTML += `<div>${choice.message.content.split('\n')
                        .join('<br/>')}</div>`
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
            }


        //  다크모드 화이트모드 스위치함수
        function switchMode()
        {
            let body = document.body;
            let theme = document.querySelector("#theme");
            body.classList.toggle("dark-mode");
            if ( theme.innerHTML == "Dark mode" )
            {
                theme.innerHTML = "White mode";
            }
            else
            {
                theme.innerHTML = "Dark mode";
            }
        }
})();