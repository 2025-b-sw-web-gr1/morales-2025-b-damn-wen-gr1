// Funcionalidad para exportar la página como imagen
document.getElementById('exportBtn').addEventListener('click', function() {
    // Ocultar el botón de exportar antes de capturar
    const exportBtn = document.getElementById('exportBtn');
    exportBtn.style.display = 'none';
    
    // Mostrar mensaje de carga
    const loadingMsg = document.createElement('div');
    loadingMsg.textContent = 'Generando imagen...';
    loadingMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 40px;
        border-radius: 8px;
        font-size: 18px;
        z-index: 10000;
    `;
    document.body.appendChild(loadingMsg);
    
    // Capturar la página con html2canvas
    html2canvas(document.body, {
        backgroundColor: '#DAE0E6',
        scale: 2, // Mayor calidad
        logging: false,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        // Remover mensaje de carga
        document.body.removeChild(loadingMsg);
        
        // Convertir canvas a imagen
        const image = canvas.toDataURL('image/png');
        
        // Crear link de descarga
        const link = document.createElement('a');
        link.download = `reddit-clone-${Date.now()}.png`;
        link.href = image;
        link.click();
        
        // Mostrar el botón de nuevo
        exportBtn.style.display = 'flex';
        
        // Mostrar mensaje de éxito
        const successMsg = document.createElement('div');
        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> ¡Imagen descargada!';
        successMsg.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: #46d369;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.style.opacity = '0';
            successMsg.style.transition = 'opacity 0.5s';
            setTimeout(() => document.body.removeChild(successMsg), 500);
        }, 3000);
    }).catch(error => {
        console.error('Error al capturar la imagen:', error);
        document.body.removeChild(loadingMsg);
        exportBtn.style.display = 'flex';
        alert('Error al generar la imagen. Por favor, intenta de nuevo.');
    });
});

// Animación de votos
document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const voteCount = this.parentElement.querySelector('.vote-count');
        const currentVotes = parseInt(voteCount.textContent.replace('k', '000'));
        
        if (this.querySelector('.fa-arrow-up')) {
            voteCount.textContent = ((currentVotes + 1) / 1000).toFixed(1) + 'k';
            this.style.color = '#FF4500';
        } else {
            voteCount.textContent = ((currentVotes - 1) / 1000).toFixed(1) + 'k';
            this.style.color = '#7193FF';
        }
    });
});

// Interacción con posts
document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', function(e) {
        if (!e.target.closest('.vote-btn') && !e.target.closest('.action-btn')) {
            this.style.transform = 'scale(0.99)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        }
    });
});

// Animación de botones
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Agregar animación de ripple en CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
