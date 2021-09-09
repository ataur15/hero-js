const company = {
    name: 'Robi',
    ceo: { name: 'Hasan', food: 'beaf', salary: '10lakh' },
    it: {
        department: 'web',
        framework: 'react',
        employee: 200,
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
    address: 'Gulsan'
}

console.log(company?.it?.tech?.third);
console.log(company?.backend?.memory?.tech.third);
