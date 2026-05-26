'use client';

import { useState, useRef, useEffect } from 'react';
import { Bell, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface Notification {
  id: string;
  title: string;
  message: string;
  icon: string;
  timestamp: string;
  isRead: boolean;
  type: 'success' | 'info' | 'warning' | 'error';
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Job Application Approved',
    message: 'Your application for Senior Carpenter has been approved.',
    icon: '✓',
    timestamp: '2 hours ago',
    isRead: false,
    type: 'success',
  },
  {
    id: '2',
    title: 'New Job Match',
    message: 'A new electrical wiring job matched your skills.',
    icon: '⚡',
    timestamp: '4 hours ago',
    isRead: false,
    type: 'info',
  },
  {
    id: '3',
    title: 'Project Payment Received',
    message: 'Payment of ₹15,000 has been received for completed project.',
    icon: '💰',
    timestamp: '1 day ago',
    isRead: true,
    type: 'success',
  },
  {
    id: '4',
    title: 'Profile Review Pending',
    message: 'Complete your profile to increase job visibility.',
    icon: '👤',
    timestamp: '2 days ago',
    isRead: true,
    type: 'warning',
  },
];

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(SAMPLE_NOTIFICATIONS);
  const [activeTab, setActiveTab] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const filteredNotifications = activeTab === 'unread'
    ? notifications.filter((n) => !n.isRead)
    : notifications;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const typeColorMap: Record<string, string> = {
    success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-muted rounded-lg transition-colors"
        aria-label="Notifications"
      >
        <Bell size={20} className="text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-96 bg-background border border-border rounded-lg shadow-lg z-50">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-muted rounded"
            >
              <X size={16} />
            </button>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="px-4 pt-3">
              <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                <TabsTrigger value="all" className="text-xs">
                  All
                </TabsTrigger>
                <TabsTrigger value="unread" className="text-xs">
                  Unread {unreadCount > 0 && `(${unreadCount})`}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              <TabsContent value={activeTab} className="mt-0 p-4 space-y-3">
                {filteredNotifications.length === 0 ? (
                  <div className="text-center py-8">
                    <Bell size={32} className="mx-auto mb-2 text-foreground/30" />
                    <p className="text-sm text-foreground/60">
                      {activeTab === 'unread'
                        ? 'No unread notifications'
                        : 'No notifications yet'}
                    </p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        'p-3 rounded-lg border border-border/50 transition-all',
                        !notification.isRead && 'bg-brand-50 dark:bg-brand-900/10 border-brand-200/50'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            'p-2 rounded-lg text-xs font-bold shrink-0',
                            typeColorMap[notification.type]
                          )}
                        >
                          {notification.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground">
                            {notification.title}
                          </h4>
                          <p className="text-xs text-foreground/60 mt-0.5">
                            {notification.message}
                          </p>
                          <p className="text-xs text-foreground/40 mt-1">
                            {notification.timestamp}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {!notification.isRead && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-1 hover:bg-muted rounded"
                              title="Mark as read"
                            >
                              <Check size={14} className="text-green-600" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1 hover:bg-muted rounded"
                            title="Delete"
                          >
                            <X size={14} className="text-foreground/50" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
            </div>
          </Tabs>

          {/* Footer */}
          {unreadCount > 0 && (
            <div className="px-4 py-3 border-t border-border/30">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                onClick={markAllAsRead}
              >
                Mark all as read
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}