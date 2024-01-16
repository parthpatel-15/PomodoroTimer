import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();

    return (
        <FormContainer>
            <div>
                <label htmlFor="task">I will work on</label>
                <TaskInput
                    id="task"
                    placeholder="Name your task"
                    {...register('task')}
                    disabled={!!activeCycle}
                />
            </div>

        
            <div>
                <label htmlFor="minutesAmount">for</label>
                <MinutesAmountInput
                    type="number"
                    id="minutesAmount"
                    placeholder='00'
                    required
                    step={5}
                    min={5}
                    max={60}
                    {...register('minutesAmount', { valueAsNumber: true })}
                    disabled={!!activeCycle}
                />

                <span>minutes.</span>
            </div>
        </FormContainer>
    )
}