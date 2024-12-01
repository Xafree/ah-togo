import { useState, useEffect } from 'react';

// Définition des types possibles pour le périphérique
type DeviceType = 'mobile' | 'tablet' | 'desktop';

const breakpoints = {
    mobile: 768, // Téléphone
    tablet: 1024, // Tablette
    desktop: 1025 // Ordinateur
};
export function useDeviceType(): DeviceType {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

    useEffect(() => {
        // Fonction pour détecter le type de périphérique
        const detectDevice = () => {
            const width = window.innerWidth;

            if (width < breakpoints.mobile) {
                setDeviceType('mobile');
            } else if (width >= breakpoints.mobile && width <= breakpoints.tablet) {
                setDeviceType('tablet');
            } else {
                setDeviceType('desktop');
            }
        };

        // Détection initiale
        detectDevice();

        // Ajout d'un listener sur la taille de l'écran pour les changements
        window.addEventListener('resize', detectDevice);

        // Nettoyage de l'écouteur lors du démontage du composant
        return () => window.removeEventListener('resize', detectDevice);
    }, []);

    return deviceType;
}


