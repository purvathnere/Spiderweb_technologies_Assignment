export const positions = Array(20)
  .fill(null)
  .map((_, index) => ({
    position: `Camera ${index + 1} (Video)`,
    time: '9 am - 7 pm',
    info: 'LP default',
    quantity: 20,
  }));

export const coordinatorOptions = ['Coordinator 1', 'Coordinator 2', 'Coordinator 3'];
export const contractorOptions = ['Contractor 1', 'Contractor 2', 'Contractor 3'];
