import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotiService {

  private notifications: any[] = [];
  private unreadCount = 0;

  // Use BehaviorSubject to track changes in notifications
  private notificationsSubject = new BehaviorSubject<any[]>(this.notifications);
  public notifications$ = this.notificationsSubject.asObservable();

  constructor() {}

  getNotifications(): any[] {
    return this.notifications;
  }

  addNotification(notification: any): void {
    this.notifications.push(notification);
    this.unreadCount++;
    this.notificationsSubject.next(this.notifications);
  }

  markAsRead(notificationIndex: number): void {
    if (!this.notifications[notificationIndex].read) {
      this.notifications[notificationIndex].read = true;
      this.unreadCount--;
      this.notificationsSubject.next(this.notifications);
    }
  }

  getUnreadCount(): number {
    return this.unreadCount;
  }
}
