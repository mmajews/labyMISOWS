#!/bin/bash
#SBATCH -p plgrid
#SBATCH -N 1
#SBATCH --ntasks-per-node=12

cat exampleTextFile | head -n $SLURM_ARRAY_TASK_ID | tail -n 1
