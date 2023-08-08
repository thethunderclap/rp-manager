export const getCurrentDNSRecords = async (zoneId: string) => {
  try {
    const response = await (
      await fetch(`/api/fetch-site-dns-records?zoneId=${zoneId}`, {
        method: 'GET',
      })
    ).json();
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const addCustomSite = async (siteName: string) => {
  try {
    const response = await (
      await fetch(`/api/add-your-site`, {
        method: 'POST',
        body: JSON.stringify({ domainName: siteName }),
      })
    ).json();
    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};
