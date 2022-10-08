// Let's get some practice using addEventListener. I've provided you with two buttons, each with an id: 'hello' and 'goodbye'.
// Your goal is to add a click listener to each button.

// When the hello button is clicked, you should console.log "hello"

// When the goodbye button is clicked, you should console.log "goodbye"



                // HARD SOLUTION


                const btn = document.querySelector('#hello');
                btn.addEventListener('click', function(){
                        console.log('hello');
                });
                
                const btn1 = document.querySelector('#goodbye');
                btn1.addEventListener('click', function(){  
                    console.log('goodbye');
                });
                
                
                
                
                
                
                
                
                
                
                                //  EASY SOLUTION
                
                
                
                // function HELLO(){   
                //     console.log('hello');
                // }
                
                // function GOODBYE(){   
                //     console.log('goodbye');
                // }
                
                // const btn = document.querySelector('#hello');
                // const btn1 = document.querySelector('#goodbye');
                // btn.addEventListener('click', HELLO);
                // btn1.addEventListener('click', GOODBYE);
                