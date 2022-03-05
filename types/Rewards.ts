export const RewardTiers = {
  t1: {
    min: 0,
    max: 1000,
    eligible: 70,
    threshold: 0.02
  },
  t2: {
    min: 1000,
    max: 20000,
    eligible: 1088,
    threshold: 2
  },
  t3: {
    min: 20000,
    max: 100000,
    eligible: 2636,
    threshold: 5
  },
  t4: {
    min: 100000,
    max: 500000,
    eligible: 7337,
    threshold: 15
  },
  t5: {
    min: 500000,
    max: Infinity,
    eligible: 16678,
    threshold: 30
  }
};

export const UsPersonAnswer = {
  yes: 'YES',
  no: 'NO',
  none: 'NONE',
  answeredAt: 0
};
