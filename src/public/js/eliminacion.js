let response = await fetch(`/login?user=${user}&pass=${pass}`)
    let json = await response.json();