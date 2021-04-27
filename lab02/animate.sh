#!/bin/bash
#SBATCH -p plgrid
#SBATCH -N 1
#SBATCH --ntasks-per-node=12
console
module add plgrid/apps/povray
#100 frames
let "a = $SLURM_ARRAY_TASK_ID * 10"
let "b = $a + 10"
povray Subset_Start_Frame=$a Subset_End_Frame=$b animation_a_.ini
