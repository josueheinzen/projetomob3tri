
        // JavaScript para funcionalidades interativas
        document.addEventListener('DOMContentLoaded', function() {
            // Botão para mostrar/ocultar conteúdo
            const showContentBtn = document.getElementById('showContentBtn');
            const hiddenContent = document.getElementById('hiddenContent');
            
            showContentBtn.addEventListener('click', function() {
                if (hiddenContent.style.display === 'block') {
                    hiddenContent.style.display = 'none';
                    showContentBtn.textContent = 'Mostrar Curiosidade';
                } else {
                    hiddenContent.style.display = 'block';
                    showContentBtn.textContent = 'Ocultar Curiosidade';
                }
            });
            
            // Botão para mudar cor de fundo
            const changeColorBtn = document.getElementById('changeColorBtn');
            const interactiveSection = document.querySelector('.interactive-section');
            let colorChanged = false;
            
            changeColorBtn.addEventListener('click', function() {
                if (!colorChanged) {
                    interactiveSection.style.backgroundColor = '#8B4513'; // Cor marrom
                    colorChanged = true;
                } else {
                    interactiveSection.style.backgroundColor = '#0047AB'; // Cor azul original
                    colorChanged = false;
                }
            });
            
            // Navegação suave para âncoras
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                });
            });
        });
