function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}
function include (filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function subir(formObject){
  var doc = DocumentApp.create("Documento Espaciado");
  doc.getBody().appendParagraph(formObject);
}
