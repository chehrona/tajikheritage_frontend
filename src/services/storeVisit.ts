export const storeVisit = (page: string) => {
    const hasVisitedBefore = localStorage.getItem('th_Id');
    let storageValue = null;

    if (!hasVisitedBefore) {
        storageValue = page + '_' + Math.random().toString(36).substring(2, 9);
        localStorage.setItem('th_Id', storageValue);
    } else {
        storageValue = localStorage.getItem('th_Id');
    }

    return storageValue;
};
