import { useKV } from '@github/spark/hooks'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowClockwise } from "@phosphor-icons/react"

interface TaskState {
  [dayKey: string]: {
    [taskIndex: number]: boolean
  }
}

const TASKS_CONFIG = {
  monday: [
    "晨会准备",
    "项目进度汇报",
    "代码审查"
  ],
  tuesday: [
    "客户需求分析",
    "技术方案设计",
    "数据库优化"
  ],
  wednesday: [
    "功能开发",
    "单元测试编写",
    "文档更新"
  ],
  thursday: [
    "集成测试",
    "bug修复",
    "代码重构"
  ],
  friday: [
    "发布准备",
    "部署检查",
    "周报总结"
  ],
  saturday: [
    "学习新技术",
    "个人项目开发"
  ],
  sunday: [
    "休息放松",
    "下周计划"
  ]
}

const DAYS = [
  { key: 'monday', name: '周一', nameEn: 'Monday' },
  { key: 'tuesday', name: '周二', nameEn: 'Tuesday' },
  { key: 'wednesday', name: '周三', nameEn: 'Wednesday' },
  { key: 'thursday', name: '周四', nameEn: 'Thursday' },
  { key: 'friday', name: '周五', nameEn: 'Friday' },
  { key: 'saturday', name: '周六', nameEn: 'Saturday' },
  { key: 'sunday', name: '周日', nameEn: 'Sunday' }
]

function App() {
  const [checkedTasks, setCheckedTasks] = useKV<TaskState>("weekly-todo-state", {})

  const toggleTask = (dayKey: string, taskIndex: number) => {
    setCheckedTasks((current) => {
      const newState = { ...current }
      const dayTasks = newState[dayKey] || {}
      dayTasks[taskIndex] = !dayTasks[taskIndex]
      newState[dayKey] = dayTasks
      return newState
    })
  }

  const resetAllTasks = () => {
    if (window.confirm('确定要重置所有任务状态吗？')) {
      setCheckedTasks({})
    }
  }

  const isTaskChecked = (dayKey: string, taskIndex: number) => {
    return checkedTasks?.[dayKey]?.[taskIndex] || false
  }

  return (
    <div className="min-h-screen bg-background p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-foreground">每周待办清单</h1>
          <Button 
            onClick={resetAllTasks}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowClockwise size={16} />
            重置
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {DAYS.map((day) => {
            const dayTasks = TASKS_CONFIG[day.key as keyof typeof TASKS_CONFIG] || []
            
            return (
              <Card key={day.key} className="p-4">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-primary mb-1">
                    {day.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {day.nameEn}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {dayTasks.length > 0 ? (
                    dayTasks.map((task, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Checkbox
                          id={`${day.key}-task-${index}`}
                          checked={isTaskChecked(day.key, index)}
                          onCheckedChange={() => toggleTask(day.key, index)}
                          className="mt-0.5"
                        />
                        <label 
                          htmlFor={`${day.key}-task-${index}`}
                          className={`text-sm cursor-pointer leading-relaxed ${
                            isTaskChecked(day.key, index) 
                              ? 'line-through text-muted-foreground' 
                              : 'text-foreground'
                          }`}
                        >
                          {task}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      暂无任务
                    </p>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App