export interface Root {
    pilot_number: string
    campaignid: string
    total_dial_history: number
    total_success: number
    total_failure: number
    success_per: number
    failure_per: number
    retry_history_0: any
    retry_history_1: any
    retry_history_2: any
    total_dial_count: number
    retry_dial_0: number
    retry_dial_1: any
    retry_dial_2: any
    callerId: string
    service_group: string
    retry0: Root[]
  }
  