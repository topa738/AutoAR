import * as THREE from 'three';

export function getControles(group){
    const geometry = new THREE.PlaneGeometry(0.06, 0.06);
    const flecha = new THREE.TextureLoader().load('./img/flecha.png');
    const materialflecha = new THREE.MeshStandardMaterial({map: flecha});
    const accelerar = new THREE.Mesh(geometry, materialflecha);

 

    accelerar.rotation.set(0, 0, Math.PI, 'XYZ');
    accelerar.position.y = -0.1
    accelerar.position.x = -0.2
    accelerar.name = 'control';
    accelerar.name2 = 'adelante';


    group.add(accelerar);
    const atrass = new THREE.Mesh(geometry, materialflecha);
    atrass.name = 'control';
    atrass.name2 = 'atras';
    atrass.rotation.set(0, 0, 0, 'XYZ');
    atrass.position.y = -0.1
    atrass.position.x = -0.1
   
    group.add(atrass);
   
 

    return group;
}



