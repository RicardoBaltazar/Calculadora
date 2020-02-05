    //o textarea vai receber ele mesmo mais o valor digitado
    function insert(num){
        document.form.textView.value += num
    };
    
    //limpar os valores de textView
    function clean(){
        document.form.textView.value = '';
    };

    //se a variavel exp existir, avaliar a expressão dentro dela e calcular
    function equal(){
        var exp = document.form.textView.value;
        if(exp){
            document.form.textView.value = eval(exp);
        };
    };

    //limpar o ultimo caractere digitado
    function back(){
        /*var exp = document.form.textView.value;
        document.form.textView.value = exp.substring(0,exp.legth-1);*/

        var exp = document.form.textView.value;
        document.form.textView.value = exp.substring(0,exp.length-1)
    }