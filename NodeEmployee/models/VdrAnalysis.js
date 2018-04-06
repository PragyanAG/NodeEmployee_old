var mongoose = require('mongoose');


var VdrAnalysisSchema = new mongoose.Schema({
  vdr_id: String,
  auditor_id: String,
  auditorname: String,
  vessel_id: String,
  vessel: String,
  company_id: String,
  company: String,
  vdrtype: String,
  vdrmake: String,
  vdrmodel: String,
  analysis_id: String,
  analysis: String,
  drcvclient: Date,
  alldocrcvd: Date,
  dtdatasent: Date,
  dtanacomp: Date,
  dtassign: Date,
  dtdeliver: Date,
  dtcomp: Date,
  duedate: Date,
  status: String  
});


module.exports = mongoose.model('VdrAnalysis', VdrAnalysisSchema,'vdranalysis');