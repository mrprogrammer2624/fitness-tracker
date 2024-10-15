const initialState = {
  workouts: [],
  goals: {
    weekly: null,
    monthly: null,
  },
  statistics: {
    workoutData: [],
    activityTypes: [],
  },
  recentWorkouts: [],
  weeklyGoal: 0,
  progress: 0,
};

const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_WORKOUT':
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        recentWorkouts: [action.payload, ...state.recentWorkouts.slice(0, 4)],
        progress: calculateProgress(state.goals, [...state.workouts, action.payload]),
      };
    case 'SET_GOAL':
      return {
        ...state,
        goals: {
          ...state.goals,
          [action.payload.goalType]: action.payload.goalValue,
        },
        weeklyGoal: action.payload.goalType === 'weekly' ? action.payload.goalValue : state.weeklyGoal,
        progress: calculateProgress({...state.goals, [action.payload.goalType]: action.payload.goalValue}, state.workouts),
      };
    case 'FETCH_STATISTICS_SUCCESS':
      return {
        ...state,
        statistics: action.payload,
      };
    case 'FETCH_RECENT_WORKOUTS_SUCCESS':
      return {
        ...state,
        recentWorkouts: action.payload,
      };
    default:
      return state;
  }
};

// Helper function to calculate progress
const calculateProgress = (goals, workouts) => {
  if (!goals.weekly) return 0;
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekWorkouts = workouts.filter(workout => new Date(workout.date) >= weekStart);
  return Math.min((weekWorkouts.length / goals.weekly) * 100, 100);
};

export default fitnessReducer;