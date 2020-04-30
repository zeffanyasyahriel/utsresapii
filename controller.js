'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi Project UTS Rest API berjalan !",res)
};
//menampilkan semua semua data sparepart
exports.tampilsparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error,rows,fields){
        if (error) {
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data montir
exports.tampildatamontir = function (req, res) {
	connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res)
		}
	});
};
//menampilkan data sparepart berdasarkan id
exports.tampildatasparepartid = function (req, res) {
	let id = req.params.id;
	connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res);
			}
		});
};
//menampilkan data montir berdasarkan id
exports.tampildatamontirid = function (req, res) {
	let id = req.params.id;
	connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res);
			}
		});
};
//menambahkan data service
exports.tambahservis = function (req, res) {
    var tgl_servis = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;


    connection.query('INSERT INTO t_service (tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart) VALUES(?,?,?,?,?)',
        [tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};