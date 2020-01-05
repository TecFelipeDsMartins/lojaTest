$(function() {
    var shopCount = [];
    //data
    produtoAbc = {
        nome: "Produto ABC",
        titleIten : "Itens incluidos",
        titleGaran : "Garantia do Produto",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed molestias accusantium alias fugiat, odit voluptatibus distinctio culpa et nostrum doloremque maxime error iure in ad, consequuntur nemo nisi sit! Maiores nostrum asperiores beatae dolores debitis soluta quia mollitia nemo reiciendis?",
        garantia: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed molestias accusantium alias fugiat, odit voluptatibus distinctio culpa et nostrum doloremque maxime error iure in ad, consequuntur nemo nisi sit! Maiores."
    }
    
    //data
    const users = [
        
        user1 = {
            parag : "Super confortável. Demais!!",
            name  : "João da Silva",
        },

        user2 = {
            parag : "Um verdadeiro clássico",
            name  : "Maria Roberta",
        },

        user3 = {
            parag : "Vale muito apena ter um tênis assim",
            name  : "Marcos Aurélio",
        },

        user4 = {
            parag : "Vou comprar todas as cores com certeza!",
            name  : "Vitor Agusto",
        }
    ]
     
    //shop cart
    $("#btn-buy").click(function(){     
        shopCount.push(produtoAbc);
        $("#shopCart").text(shopCount.length);
        alert("Ótima escolha! Produto adicionado ao seu carrinho");
        
        //refresh iten at "itens inclusos"
        if($('#iten').hasClass('nav-footer-checked')) {
           $("#para-nav-footer").text(`Você possui ${shopCount.length} iten(s)`); 
          }
       
    })    
        
    //star rating
    var count = 0;
    $("#btn-rating").click(function(){
            count++
            $("#quote").text(users[count].parag);
            $("#cite").text(users[count].name);
            
    });



    //product descrition
    function showContent(classAdd, classRm1, classRm2, produto){
        
        $(classAdd).click(function(){

            $(classAdd).addClass("nav-footer-checked");
            $(classRm1).removeClass("nav-footer-checked");
            $(classRm2).removeClass("nav-footer-checked");
            
            if (classAdd == "#desc"){
                $("#product-nav-footer").text(produto.nome);
                $("#para-nav-footer").text(produto.descricao);
            } else if(classAdd == "#iten"){
                $("#product-nav-footer").text(produto.titleIten);
                $("#para-nav-footer").text(`Você possui ${shopCount.length} iten(s)`);
            } else if (classAdd == "#garan"){
                $("#product-nav-footer").text(produto.titleGaran);
                $("#para-nav-footer").text(produto.garantia);
            }
        });
    }

    showContent("#iten", "#desc", "#garan", produtoAbc);
    showContent("#desc", "#iten", "#garan", produtoAbc);
    showContent("#garan", "#desc", "#iten", produtoAbc);












        

 });