// Store last copied values
let lastCopiedCommand = '';
let lastCopiedHobby = '';

function copyHobbyigor2() {
    const k2v4ip = document.getElementById('k2v4ip').value;
    const bmcip = document.getElementById('bmcip').value;
    const command = `./push_k2v4_kegs_igor.sh ${bmcip || '[BMC_IP]'} ${k2v4ip || '[K2V4_IP]'}`;
    const button = event.target;
    
    navigator.clipboard.writeText(command).then(() => {
        // Check if content is same as last copy
        if (command === lastCopiedCommand) {
            button.style.backgroundColor = '#4CAF50'; // Green for same content
            button.style.color = 'white';
        } else {
            button.style.backgroundColor = '#2196F3'; // Blue for new content
            button.style.color = 'white';
        }
        
        lastCopiedCommand = command;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        
        setTimeout(() => {
            button.textContent = originalText;
            // Reset color after 2 seconds
            setTimeout(() => {
                button.style.backgroundColor = '';
                button.style.color = '';
            }, 200);
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function copyHobbyigor1() {
    const hobbyText = `cd /mnt/gv2/users/eker`; // Fixed text
    const button = event.target;
    
    navigator.clipboard.writeText(hobbyText).then(() => {
        // Visual feedback
        button.style.backgroundColor = '#2196F3';
        button.style.color = 'white';
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}


