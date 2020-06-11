var s = new Zotero.Search();
s.libraryID = Zotero.Groups.getLibraryIDFromGroupID(2319948);

s.addCondition("tag", "is", "NO-DATE");

var itemIDs = await s.search();

for (var itemID of itemIDs) {
  var item = Zotero.Items.get(itemID);
 
}
