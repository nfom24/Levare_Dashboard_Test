function loadReport(departmentCode) {
        const frame = document.getElementById('powerbi-frame');

        // Aquí se definen los links específicos por departamento
        const reports = {
            fi: ' https://app.powerbi.com/reportEmbed?reportId=3ea38bfd-fe10-4963-858b-144f200691bb&autoAuth=true&embeddedDemo=true',
            cs: ' https://app.powerbi.com/reportEmbed?reportId=79f197f4-fbc3-4135-8135-7eab7b94c68f&autoAuth=true&ctid=78d9592e-5da3-4d8d-bea2-0bf3001355b2',
            inv: ' https://app.powerbi.com/reportEmbed?reportId=a22e1c09-c9ec-4376-82c3-535859f1ad7b&autoAuth=true&ctid=78d9592e-5da3-4d8d-bea2-0bf3001355b2',
            sc: ' https://app.powerbi.com/reportEmbed?reportId=3ea38bfd-fe10-4963-858b-144f200691bb&autoAuth=true&embeddedDemo=true',
            ca: ' https://app.powerbi.com/reportEmbed?reportId=10ce37ea-be41-4b99-ab24-c477646edb9c&autoAuth=true&ctid=78d9592e-5da3-4d8d-bea2-0bf3001355b2',
            rh: ' https://app.powerbi.com/reportEmbed?reportId=3ea38bfd-fe10-4963-858b-144f200691bb&autoAuth=true&embeddedDemo=true'
        };

        if (reports[departmentCode]) {
            frame.src = reports[departmentCode];
        } else {
            frame.src = ''; // opcional: limpiar si no hay coincidencia
        }
    }