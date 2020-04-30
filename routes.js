'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
         app.route('/tampil')
          .get(jsonku.tampilsparepart);

         app.route('/tampilmontir')
         .  get(jsonku.tampildatamontir);

         app.route('/tampil/:id')
            .get(jsonku.tampildatasparepartid);
         
         app.route('/tampilmontir/:id')
            .get(jsonku.tampildatamontirid);

         app.route('/tambahservis')
            .post(jsonku.tambahservis);

         app.route('tambahlevel')
            .post(jsonku.tambahlevel);

         app.route('/tambahuser')
            .post(jsonku.tambahuser)

         app.route('/tambahmontir')
            .post(jsonku.tambahmontir);

         app.route('/tambahsparepart')
            .post(jsonku.tambahsparepart)

         app.route('/ubahmontir')
            .put(jsonku.ubahmontir);

         app.route('/ubahsparepart')
            .put(jsonku.ubahsparepart);

         app.route('/ubahuser')
            .put(jsonku.ubahuser);

         app.route('/ubahlevel')
            .put(jsonku.ubahlevel);

         app.route('/ubahservis')
            .put(jsonku.ubahservis);

         app.route('/hapusmontir')
            .delete(jsonku.hapusMontir);

         app.route('/hapussparepart')
            .delete(jsonku.hapusSparepart);

         app.route('/hapususer')
            .delete(jsonku.hapusUSer)

         app.route('/hapuslevel')
            .delete(jsonku.hapusLevel);
}

