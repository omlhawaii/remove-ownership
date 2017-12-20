const OLD_EMAIL = 'censored@omlhawaii.com';
const NEW_EMAIL = 'censored@omlhawaii.com';

function removeFromOld() {
	var files = DriveApp.getFiles(); //.searchFiles(params);
	while (files.hasNext()) {
		var file = files.next();

		if (file.getOwner().getEmail() == OLD_EMAIL) {
			file.setOwner(NEW_EMAIL);
		}

		file.revokePermissions(OLD_EMAIL);
		//file.setTrashed(true);
	}
}

function fixDuplicateItems() {
	var root = DriveApp.getRootFolder(), rootId = root.getId(),
		folders = root.getFolders(), files = root.getFiles();
	while (folders.hasNext()) {
		var folder = folders.next();
		var parents = folder.getParents();
		while (parents.hasNext()) {
			var parent = parents.next();
			if (parent.getId() == rootId) {
				root.removeFolder(folder);
				break;
			} else continue;
		}
	}
}
