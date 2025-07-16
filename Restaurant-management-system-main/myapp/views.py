from django.shortcuts import render,redirect
from .forms import BookingForm,RatingForm,ReportingForm,CancelForm
from .models import Menu,Booking
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.contrib.auth import authenticate,login

name=''

# Create your views here.
def home(request):
    return render(request, 'home.html')

def signin(request):
    if request.method=='POST':
        username1=request.POST.get('username-1')
        password1=request.POST.get('password-1')
        user_to_check=authenticate(username=username1,password=password1)
        if user_to_check is not None:
            login(request,user_to_check)
            return redirect('index')
        else:
            error={'error':"You entered a wrong password"}
            return render(request, 'signin.html',error)

    return render(request, 'signin.html')

def signup(request):
    if request.method=='POST':
        username=request.POST.get('username-1')
        email=request.POST.get('email-1')
        password=request.POST.get('password-1')
        password_1=request.POST.get('password-11')
        x= User.objects.filter(username=username)
        if x:
            error={'error':"Username is already taken"}
            return render(request, 'signup.html', error)
        x= User.objects.filter(email=email)
        if x:
            error={'error':"Email is already taken"}
            return render(request, 'signup.html', error)
        if password!=password_1:
            error={'error':"Both passwords doesn't match"}
            return render(request, 'signup.html', error)
        user_to_create=User.objects.create_user(username,email,password)
        user_to_create.save()
        return redirect('signin')
    
    return render(request, 'signup.html')

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def vieworder(request):
    return render(request, 'vieworder.html')

def book(request):
    form = BookingForm()
    if request.method == 'POST':
        form = BookingForm(request.POST)
        if form.is_valid():
            form.save()
            obj=Booking.objects.latest('id')
            context={'id':obj.id}
            return render(request, 'booked.html',context)
    context = {'form':form}
    return render(request, 'book.html', context)

def adding(request):
    return render(request, 'adding.html')



def menu(request):
    menu_data=Menu.objects.filter(type='Main Course')
    main_data={'menu':menu_data}
    menu_data_1=Menu.objects.filter(type='Appetizers')
    main_data_1={'menu':menu_data_1}
    menu_data_2=Menu.objects.filter(type='Desserts')
    main_data_2={'menu':menu_data_2}
    menu_data_3=Menu.objects.filter(type='Juices')
    main_data_3={'menu':menu_data_3}
    return render(request,'menu.html',{'menu':main_data,'menu_1':main_data_1,'menu_2':main_data_2,'menu_3':main_data_3})

    

def display_menu_item(request, pk=None): 
    if pk: 
        menu_item = Menu.objects.get(pk=pk) 
    else: 
        menu_item = "" 
    return render(request, 'menu_item.html', {"menu_item": menu_item,'menu_item_img':'img/menu_items/'+menu_item.name}) 



def rating(request):
    form = RatingForm()
    if request.method == 'POST':
        form = RatingForm(request.POST)
        if form.is_valid():
            form.save()
    context = {'form':form}
    return render(request, 'rating.html', context)

def report(request):
    form = ReportingForm()
    if request.method == 'POST':
        form = ReportingForm(request.POST)
        if form.is_valid():
            form.save()
    context = {'form':form}
    return render(request, 'report.html', context)

def cancel(request):
    form=CancelForm()
    if request.method == 'POST':
        form = CancelForm(request.POST)
        if form.is_valid():
            form.save()
            x=Booking.objects.get(id=request.POST.get('table_ID'))
            if ((request.POST.get('first_name')==x.first_name) and (request.POST.get('last_name')==x.last_name) and (int(request.POST.get('table_ID'))<=int(Booking.objects.latest('id').id))):
                Booking.objects.get(id=request.POST.get('table_ID')).delete()
                cancel_id={'num':request.POST.get('table_ID')}
                return render(request, 'canceled.html', cancel_id)
            else:
                form=CancelForm()
                context={'wrong':"You entered wrong data",'form':form}
                return render(request, 'cancel.html', context)
    context = {'form':form}
    return render(request, 'cancel.html', context)

